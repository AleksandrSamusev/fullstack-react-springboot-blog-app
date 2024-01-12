package dev.practice.mainapp.services;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.dtos.article.ArticleNewDto;
import dev.practice.mainapp.dtos.article.ArticleUpdateDto;

import java.util.List;
import java.util.Optional;

public interface ArticlePrivateService {
    ArticleFullDto createArticle(String login, ArticleNewDto newArticle);

    ArticleFullDto updateArticle(String login, Long articleId, ArticleUpdateDto updateArticle);

    Optional<?> getArticleById(String login, Long articleId);

    String likeArticle(String login, Long articleId, Long userId);

    void deleteArticle(String login, Long articleId);

    List<ArticleFullDto> getAllArticlesByUserId(String login, Integer from, Integer size, String status);

    ArticleFullDto publishArticle(String login, Long articleId);
}
