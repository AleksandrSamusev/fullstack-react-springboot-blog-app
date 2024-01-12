package dev.practice.mainapp.mappers;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.dtos.article.ArticleNewDto;
import dev.practice.mainapp.dtos.article.ArticleShortDto;
import dev.practice.mainapp.dtos.article.ArticleUpdateDto;
import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.ArticleStatus;
import dev.practice.mainapp.models.User;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public class ArticleMapper {

    public static Article toArticleFromNew(ArticleNewDto dto, User user) {
        Article article = new Article();
        article.setTitle(dto.getTitle().trim());
        article.setContent(dto.getContent());
        article.setImage(dto.getImage());
        article.setAuthor(user);
        article.setViews(0L);
        article.setComments(new HashSet<>());
        article.setTags(new HashSet<>());
        article.setLikes(new HashSet<>());
        return article;
    }

    public static ArticleFullDto toArticleFullDto(Article article) {

        ArticleFullDto articleFullDto = new ArticleFullDto();

        articleFullDto.setArticleId(article.getArticleId());
        articleFullDto.setTitle(article.getTitle());
        articleFullDto.setContent(article.getContent());
        articleFullDto.setImage(article.getImage());
        articleFullDto.setAuthor(UserMapper.toUserShortDto(article.getAuthor()));
        articleFullDto.setCreated(article.getCreated());
        articleFullDto.setPublished(article.getPublished());
        articleFullDto.setStatus(article.getStatus());
        articleFullDto.setViews(article.getViews());
        articleFullDto.setComments(article.getComments().stream()
                .map(CommentMapper::toCommentFullDto).collect(Collectors.toSet()));
        articleFullDto.setLikes(article.getLikes().stream()
                .map(LikeMapper::toLikeFullDto).collect(Collectors.toSet()));
        articleFullDto.setTags(article.getTags().stream()
                .map(TagMapper::toTagShortDto).collect(Collectors.toSet()));

        return articleFullDto;
    }

    public static ArticleShortDto toArticleShortDto(Article article) {

        ArticleShortDto articleShortDto = new ArticleShortDto();
        articleShortDto.setArticleId(article.getArticleId());
        articleShortDto.setTitle(article.getTitle());
        articleShortDto.setContent(article.getContent());
        articleShortDto.setImage(article.getImage());
        articleShortDto.setAuthor(UserMapper.toUserShortDto(article.getAuthor()));
        articleShortDto.setPublished(article.getPublished());
        articleShortDto.setViews(article.getViews());
        articleShortDto.setComments(article.getComments().stream()
                .map(CommentMapper::toCommentShortDto).collect(Collectors.toSet()));
        articleShortDto.setLikes(article.getLikes().stream()
                .map(LikeMapper::toLikeFullDto).collect(Collectors.toSet()));
        articleShortDto.setTags(article.getTags().stream()
                .map(TagMapper::toTagShortDto).collect(Collectors.toSet()));

        return articleShortDto;
    }

    public static Article toArticleFromUpdate(Article article, ArticleUpdateDto updateArticle) {
        article.setTitle(updateArticle.getTitle() == null ? article.getTitle() : updateArticle.getTitle().trim());
        article.setContent(updateArticle.getContent() == null ? article.getContent() : updateArticle.getContent());
        article.setImage(updateArticle.getImage() == null ? article.getImage() : updateArticle.getImage());
        article.setComments(new HashSet<>());
        article.setStatus(ArticleStatus.CREATED);
        article.setPublished(null);
        return article;
    }

    public static List<ArticleShortDto> toListArticleShort(List<Article> articles) {
        return articles.stream().map(ArticleMapper::toArticleShortDto).toList();
    }

    public static List<ArticleFullDto> toListArticleFull(List<Article> articles) {
        return articles.stream().map(ArticleMapper::toArticleFullDto).toList();
    }

}
