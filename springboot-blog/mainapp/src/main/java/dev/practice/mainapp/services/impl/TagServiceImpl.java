package dev.practice.mainapp.services.impl;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.dtos.tag.TagFullDto;
import dev.practice.mainapp.dtos.tag.TagNewDto;
import dev.practice.mainapp.exceptions.ActionForbiddenException;
import dev.practice.mainapp.exceptions.InvalidParameterException;
import dev.practice.mainapp.mappers.ArticleMapper;
import dev.practice.mainapp.mappers.TagMapper;
import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.Tag;
import dev.practice.mainapp.models.User;
import dev.practice.mainapp.repositories.ArticleRepository;
import dev.practice.mainapp.repositories.TagRepository;
import dev.practice.mainapp.services.TagService;
import dev.practice.mainapp.utils.Validations;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;
    private final ArticleRepository articleRepository;
    private final Validations validations;

    @Override
    public TagFullDto createTag(TagNewDto dto, Long articleId) {
        Article article = validations.checkArticleExist(articleId);
        dto.setName(dto.getName().toLowerCase().trim());
        if (tagRepository.findTagByName(dto.getName()) != null) {
            log.info("InvalidParameterException. Tag with given name = " + dto.getName() + " already exists");
            throw new InvalidParameterException("Tag with given name = " + dto.getName() + " already exists");
        }

        Tag tag = TagMapper.toTag(dto);
        tag.getArticles().add(article);
        Tag savedTag = tagRepository.save(tag);

        article.getTags().add(savedTag);
        articleRepository.save(article);

        log.info("Tag with ID = " + savedTag.getTagId() + " created");
        return TagMapper.toTagFullDto(savedTag);
    }

    @Override
    public void deleteTag(Long tagId, String login) {
        User user = validations.checkUserExistsByUsernameOrEmail(login);
        if (!validations.isAdmin(login)) {
            log.error("Only admin can delete tag. User with id {} is not admin", user.getUserId());
            throw new ActionForbiddenException("Action forbidden for current user. Only admin can delete tag");
        }

        Tag tag = validations.isTagExists(tagId);
        Set<Article> articles = tag.getArticles();
        articles.forEach(article -> article.getTags().remove(tag));
        articleRepository.saveAll(articles);
        tagRepository.delete(tag);
        log.info("Tag with ID = " + tagId + " successfully deleted");
    }

    @Override
    public List<TagFullDto> getAllArticleTags(Long articleId) {
        Article article = validations.checkArticleExist(articleId);
        log.info("Return all tags for article with ID = " + articleId);
        return article.getTags().stream().map(TagMapper::toTagFullDto).collect(Collectors.toList());
    }

    @Override
    public TagFullDto getTagById(Long tagId) {
        Tag tag = validations.isTagExists(tagId);
        log.info("Return tag with ID = " + tagId);
        return TagMapper.toTagFullDto(tag);
    }

    @Override
    public ArticleFullDto addTagsToArticle(String login, Long articleId, List<TagNewDto> tags) {
        User user = validations.checkUserExistsByUsernameOrEmail(login);
        Article article = validations.checkArticleExist(articleId);
        validations.checkUserIsAuthor(article, user.getUserId());

        if (tags.isEmpty()) {
            log.info("Tags connected to article with id {} wasn't changed. New tags list was empty", articleId);
            return ArticleMapper.toArticleFullDto(article);
        }

        for (TagNewDto newTag : tags) {
            newTag.setName(newTag.getName().trim().toLowerCase());

            Tag tag = tagRepository.findTagByName(newTag.getName());
            if (tag != null) {
                if (!article.getTags().contains(tag)) {
                    tag.getArticles().add(article);
                    tagRepository.save(tag);

                    article.getTags().add(tag);
                    articleRepository.save(article);
                    log.info("Tag with id {} was added to article with id {}", tag.getTagId(), articleId);
                }
            } else {
                createTag(newTag, articleId);
            }
        }

        return ArticleMapper.toArticleFullDto(articleRepository.getReferenceById(articleId));
    }

    @Override
    public ArticleFullDto removeTagsFromArticle(String login, Long articleId, List<Long> tags) {
        User user = validations.checkUserExistsByUsernameOrEmail(login);
        Article article = validations.checkArticleExist(articleId);
        validations.checkUserIsAuthor(article, user.getUserId());

        if (tags.isEmpty()) {
            log.info("Tags connected to article with id {} wasn't changed. Tags list was empty", articleId);
            return ArticleMapper.toArticleFullDto(article);
        }

        for (Long tagId : tags) {
            Tag tag = validations.isTagExists(tagId);
            tag.getArticles().remove(article);
            tagRepository.save(tag);

            article.getTags().remove(tag);
            log.info("Tags with id {} unconnected from article with id {}", tagId, articleId);
        }
        return ArticleMapper.toArticleFullDto(articleRepository.save(article));
    }
}
