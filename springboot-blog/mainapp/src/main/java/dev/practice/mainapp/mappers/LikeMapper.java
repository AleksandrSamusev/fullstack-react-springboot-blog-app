package dev.practice.mainapp.mappers;

import dev.practice.mainapp.dtos.like.LikeFullDto;
import dev.practice.mainapp.models.Like;
import org.springframework.stereotype.Component;

@Component
public class LikeMapper {

    public static LikeFullDto toLikeFullDto(Like like) {
        LikeFullDto dto = new LikeFullDto();
        dto.setLikeId(like.getLikeId());
        dto.setArticleId(like.getArticle().getArticleId());
        dto.setUser(UserMapper.toUserShortDto(like.getUser()));
        dto.setCreated(like.getCreated());
        return dto;
    }
}
