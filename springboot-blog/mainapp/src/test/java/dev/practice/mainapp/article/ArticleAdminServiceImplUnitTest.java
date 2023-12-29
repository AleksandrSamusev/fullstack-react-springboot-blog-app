package dev.practice.mainapp.article;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.mappers.UserMapper;
import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.ArticleStatus;
import dev.practice.mainapp.models.Role;
import dev.practice.mainapp.models.User;
import dev.practice.mainapp.repositories.ArticleRepository;
import dev.practice.mainapp.services.ArticlePrivateService;
import dev.practice.mainapp.services.impl.ArticleAdminServiceImpl;
import dev.practice.mainapp.utils.Validations;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
public class ArticleAdminServiceImplUnitTest {
    @Mock
    private ArticleRepository articleRepository;

    @Mock
    private ArticlePrivateService articlePrivateService;

    @Mock
    private Validations validations;

    @InjectMocks
    private ArticleAdminServiceImpl articleService;

    private final Role roleAdmin = new Role(1L, "ROLE_ADMIN");
    private final Role roleUser = new Role(2L, "ROLE_USER");
    private final User author = new User(0L, "Harry", "Potter", "author",
            "user-password", "hp@gmail.com", LocalDate.of(1981, 7, 31),
            Set.of(roleUser), null, false, new HashSet<>(), new HashSet<>(), new HashSet<>(),
            new HashSet<>());
    private final User admin = new User(1L, "Ron", "Weasley", "admin",
            "admin-password", "rw@gmail.com", LocalDate.of(1981, 9, 16),
            Set.of(roleAdmin), null, false, new HashSet<>(), new HashSet<>(), new HashSet<>(),
            new HashSet<>());
    private final ArticleFullDto fullArticle = new ArticleFullDto(0L, "The empty pot",
            "Very interesting information", UserMapper.toUserShortDto(author), LocalDateTime.now(),
            LocalDateTime.now(), ArticleStatus.PUBLISHED, 0L, 0L, new HashSet<>(), new HashSet<>());
    private final Article article = new Article(0L, "The empty pot",
            "Very interesting information", author, LocalDateTime.now(), LocalDateTime.now(),
            ArticleStatus.PUBLISHED, 0L, 0L, new HashSet<>(), new HashSet<>());

    @Test
    void articleAd_test_1_Given_adminAndExistUser_When_getAllArticlesByUserId_Then_returnAllUserArticles() {
        Mockito
                .when(validations.checkUserExistsByUsernameOrEmail(Mockito.any()))
                .thenReturn(admin);
        Mockito
                .when(validations.isAdmin(Mockito.any()))
                .thenReturn(true);
        Mockito
                .when(validations.checkUserExist(Mockito.anyLong()))
                .thenReturn(author);
        Mockito
                .when(articlePrivateService.getAllArticlesByUserId(
                        Mockito.anyString(), Mockito.any(), Mockito.any(), Mockito.any()))
                .thenReturn(List.of(fullArticle));


        List<ArticleFullDto> result = articleService.getAllArticlesByUserId(admin.getUsername(),
                1L, 0, 0, "ALL");

        assertThat(result.get(0)).isInstanceOf(ArticleFullDto.class);
        assertThat(result.size()).isEqualTo(1);
    }

    @Test
    void articleAd_test_2_Given_adminPublishTrue_When_publishArticle_Then_returnArticleStatusPublished() {
        article.setPublished(null);
        article.setStatus(ArticleStatus.CREATED);
        Mockito
                .when(validations.checkUserExistsByUsernameOrEmail(Mockito.any()))
                .thenReturn(admin);
        Mockito
                .when(validations.isAdmin(Mockito.any()))
                .thenReturn(true);
        Mockito
                .when(validations.checkArticleExist(Mockito.anyLong()))
                .thenReturn(article);
        Mockito
                .when(articleRepository.save(Mockito.any()))
                .thenReturn(article);

        ArticleFullDto result = articleService.publishArticle(admin.getUsername(), 0L, true);

        assertThat(result.getPublished()).isNotNull();
        assertThat(result.getStatus()).isEqualTo(ArticleStatus.PUBLISHED);
    }

    @Test
    void articleAd_test_3_Given_adminPublishFalse_When_publishArticle_Then_returnArticleStatusRejected() {
        article.setPublished(null);
        article.setStatus(ArticleStatus.CREATED);
        Mockito
                .when(validations.checkUserExistsByUsernameOrEmail(Mockito.any()))
                .thenReturn(admin);
        Mockito
                .when(validations.isAdmin(Mockito.any()))
                .thenReturn(true);
        Mockito
                .when(validations.checkArticleExist(Mockito.anyLong()))
                .thenReturn(article);
        Mockito
                .when(articleRepository.save(Mockito.any()))
                .thenReturn(article);

        ArticleFullDto result = articleService.publishArticle(admin.getUsername(), 0L, false);

        assertThat(result.getPublished()).isNull();
        assertThat(result.getStatus()).isEqualTo(ArticleStatus.REJECTED);
    }
}
