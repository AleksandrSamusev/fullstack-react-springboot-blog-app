package dev.practice.mainapp.services.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import dev.practice.mainapp.client.StatsClient;
import dev.practice.mainapp.dtos.article.ArticleShortDto;
import dev.practice.mainapp.mappers.ArticleMapper;
import dev.practice.mainapp.models.*;
import dev.practice.mainapp.repositories.ArticleRepository;
import dev.practice.mainapp.services.ArticlePublicService;
import dev.practice.mainapp.utils.Validations;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ArticlePublicServiceImpl implements ArticlePublicService {
    private final ArticleRepository articleRepository;
    private final StatsClient statsClient;
    private final Validations validations;

    @Override
    public ArticleShortDto getArticleById(Long articleId, HttpServletRequest request) {
        Article article = validations.checkArticleExist(articleId);
        validations.checkArticleIsPublished(article);

        createRecordAndSave(request);

        List<StatisticRecord> responses = sendRequestToStatistic(statsClient,
                List.of(String.format("/api/v1/public/articles/%s",
                        articleId)));

        Article savedArticle = setViewsToArticleAndSave(responses, article);
        log.info("Return article with ID = " + articleId);

        return ArticleMapper.toArticleShortDto(savedArticle);
    }

    @Override
    public List<ArticleShortDto> getAllArticles(Integer from, Integer size, String text) {
        PageRequest pageable = PageRequest.of(from, size);
        List<Article> articles = new ArrayList<>();
        if(text==null) {
            articles = articleRepository.findAllByStatusOrderByPublishedDesc(
                    ArticleStatus.PUBLISHED, pageable);
        } else {
            articles = articleRepository.findByText(text);
        }

        List<String> uris = createListOfUris(articles);
        List<StatisticRecord> responses = sendRequestToStatistic(statsClient, uris);
        List<Article> savedArticles = setViewsToArticlesAndSave(responses, articles);

        return ArticleMapper.toListArticleShort(savedArticles);
    }


    @Override
    public List<ArticleShortDto> getAllArticlesByUserId(Long userId, Integer from, Integer size) {
        User user = validations.checkUserExist(userId);

        List<Article> articles = user.getArticles()
                .stream()
                .filter(a -> a.getStatus() == ArticleStatus.PUBLISHED)
                .sorted(Comparator.comparing(Article::getPublished).reversed())
                .toList();

        List<Article> articlesPageable = articles.subList(
                from * size > articles.size() ? articles.size() - size : from * size,
                Math.min(from * size + size, articles.size()));

        List<String> uris = createListOfUris(articlesPageable);
        List<StatisticRecord> responses = sendRequestToStatistic(statsClient, uris);
        List<Article> savedArticles = setViewsToArticlesAndSave(responses, articlesPageable);

        return ArticleMapper.toListArticleShort(savedArticles);
    }

    @Override
    public ArticleShortDto likeArticle(Long articleId) {
        Article article = validations.checkArticleExist(articleId);
        validations.checkArticleIsPublished(article);
        Long likes = article.getLikes();
        likes++;
        article.setLikes(likes);
        Article savedArticle = articleRepository.save(article);
        log.info("Add like to article with ID = " + articleId);
        return ArticleMapper.toArticleShortDto(savedArticle);
    }

    @Override
    public List<ArticleShortDto> getAllArticlesByTag(Long tagId) {
        Tag tag = validations.isTagExists(tagId);

        List<Article> articles = tag.getArticles().stream().filter((x) -> x.getPublished() != null).toList();

        List<String> uris = createListOfUris(articles);
        List<StatisticRecord> responses = sendRequestToStatistic(statsClient, uris);
        List<Article> savedArticles = setViewsToArticlesAndSave(responses, articles);

        return savedArticles.stream()
                .map(ArticleMapper::toArticleShortDto)
                .sorted(Comparator.comparing(ArticleShortDto::getPublished))
                .collect(Collectors.toList());
    }

    @Override
    public Integer countAllArticles() {
        return articleRepository.findAll().size();
    }

    private void createRecordAndSave(HttpServletRequest request) {
        StatisticRecord newRecord = new StatisticRecord(
                null,
                "mainApp",
                request.getRemoteAddr(),
                request.getRequestURI(),
                LocalDateTime.now()
        );
        statsClient.addStats(newRecord);
    }

    private List<String> createListOfUris(List<Article> articles) {
        List<String> uris = new ArrayList<>();
        articles.forEach(e -> {
            uris.add(String.format("/api/v1/public/articles/%s", e.getArticleId()));
        });
        return uris;
    }

    private List<StatisticRecord> sendRequestToStatistic(StatsClient client, List<String> uris) {
        List<StatisticRecord> responses;
        try {
            responses = statsClient.getStats(LocalDateTime.now().minusYears(100),
                    LocalDateTime.now(), uris);
        } catch (JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
        return responses;
    }

    private List<Article> setViewsToArticlesAndSave(List<StatisticRecord> responses, List<Article> articles) {
        Map<Long, Long> count = new HashMap<>();
        responses.forEach(e -> {
            String[] arr = e.getUri().split("/");
            Long id = Long.parseLong(arr[arr.length - 1]);

            if (!count.containsKey(id)) {
                count.put(id, 1L);
            } else {
                count.put(id, count.get(id) + 1);
            }

        });
        articles.forEach(e -> {
            e.setViews(count.getOrDefault(e.getArticleId(), 0L));
        });
        return articleRepository.saveAll(articles);
    }

    private Article setViewsToArticleAndSave(List<StatisticRecord> responses, Article article) {
        if (responses.isEmpty()) {
            article.setViews(0L);
        } else {
            article.setViews((long) responses.size());
        }
        return articleRepository.save(article);
    }
}