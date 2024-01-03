package dev.practice.mainapp.repositories;

import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.ArticleStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    Article findArticlesByTitleIgnoreCase(String title);

    List<Article> findAllByStatusOrderByPublishedDesc(ArticleStatus status, PageRequest pageable);

    List<Article> findAllByAuthorUsernameAndStatus(String username, ArticleStatus status, PageRequest pageable);

    List<Article> findAllByAuthorUsername(String username, PageRequest pageable);

    @Query("SELECT a FROM Article a WHERE lower(a.title) LIKE lower(concat('%',:text,'%'))" +
            " OR lower(a.content) LIKE lower(concat('%', :text, '%'))")
    List<Article> findByText(String text);
}
