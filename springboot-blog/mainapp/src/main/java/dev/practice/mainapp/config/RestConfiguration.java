package dev.practice.mainapp.config;

import dev.practice.mainapp.dtos.user.UserFullDto;
import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.Comment;
import dev.practice.mainapp.models.Tag;
import dev.practice.mainapp.models.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class RestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(
            RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Article.class);
        config.exposeIdsFor(Tag.class);
        config.exposeIdsFor(Comment.class);
        config.exposeIdsFor(User.class);
        config.exposeIdsFor(UserFullDto.class);
    }
}
