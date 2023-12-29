package dev.practice.mainapp.dtos.comment;

import dev.practice.mainapp.dtos.user.UserShortDto;
import jakarta.validation.constraints.NotBlank;
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
public class CommentFullDto {

    @NotNull(message = "Comment ID cannot be null")
    private Long commentId;

    @NotBlank(message = "Comment cannot be blank")
    private String comment;

    @NotNull(message = "Created parameter cannot be null")
    private LocalDateTime created;

    @NotNull(message = "Article ID cannot be null")
    private Long articleId;

    @NotNull(message = "Comment author cannot be null")
    private UserShortDto commentAuthor;
}
