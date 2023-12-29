package dev.practice.mainapp.services;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.dtos.tag.TagFullDto;
import dev.practice.mainapp.dtos.tag.TagNewDto;

import java.util.List;

public interface TagService {
    TagFullDto createTag(TagNewDto dto, Long articleId);

    void deleteTag(Long tagId, String login);

    List<TagFullDto> getAllArticleTags(Long articleId);

    TagFullDto getTagById(Long tagId);

    ArticleFullDto addTagsToArticle(String login, Long articleId, List<TagNewDto> tags);

    ArticleFullDto removeTagsFromArticle(String login, Long articleId, List<Long> tags);
}
