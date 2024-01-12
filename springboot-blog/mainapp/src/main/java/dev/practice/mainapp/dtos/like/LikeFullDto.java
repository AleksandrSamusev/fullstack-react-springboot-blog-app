package dev.practice.mainapp.dtos.like;

import dev.practice.mainapp.dtos.user.UserShortDto;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LikeFullDto {
    @NotNull(message = "Like ID cannot be null")
    private Long likeId;
    @NotNull(message = "Article ID cannot be null")
    private Long articleId;
    @NotNull(message = "User cannot be null")
    private UserShortDto user;
    private LocalDateTime created;
}
