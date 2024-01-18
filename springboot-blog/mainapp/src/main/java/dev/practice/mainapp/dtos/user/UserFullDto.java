package dev.practice.mainapp.dtos.user;

import dev.practice.mainapp.dtos.article.ArticleShortDto;
import dev.practice.mainapp.dtos.comment.CommentShortDto;
import dev.practice.mainapp.dtos.like.LikeFullDto;
import dev.practice.mainapp.dtos.message.MessageFullDto;
import dev.practice.mainapp.models.Like;
import dev.practice.mainapp.models.Role;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserFullDto {

    @NotNull(message = "User ID cannot be null")
    private Long userId;

    @NotBlank(message = "User first name cannot be blank")
    private String firstName;

    @NotBlank(message = "User last name cannot be blank")
    private String lastName;

    @NotBlank(message = "Username cannot be blank")
    private String username;

    @NotBlank(message = "Password cannot be blank")
    private String password;

    @NotBlank(message = "User email cannot be blank")
    private String email;

    @NotNull(message = "User birth date cannot be null")
    private LocalDate birthDate;

    private String avatar;

    private Set<Role> roles;

    private String about;

    @NotNull(message = "Is banned parameter cannot be null")
    private Boolean isBanned;
    private Set<MessageFullDto> sentMessages = new HashSet<>();
    private Set<MessageFullDto> receivedMessages = new HashSet<>();
    private Set<ArticleShortDto> articles = new HashSet<>();
    private Set<CommentShortDto> comments = new HashSet<>();
    private Set<LikeFullDto> likes = new HashSet<>();
}
