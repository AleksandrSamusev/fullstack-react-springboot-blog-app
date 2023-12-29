package dev.practice.mainapp.services;

import dev.practice.mainapp.dtos.comment.CommentFullDto;
import dev.practice.mainapp.dtos.comment.CommentNewDto;

import java.util.List;

public interface CommentService {
    CommentFullDto createComment(Long articleId, CommentNewDto dto, String login);

    CommentFullDto updateComment(CommentNewDto dto, Long commentId, String login);

    void deleteComment(Long commentId, String login);

    CommentFullDto getCommentById(Long commentId);

    List<CommentFullDto> getAllCommentsToArticle(Long articleId);
}
