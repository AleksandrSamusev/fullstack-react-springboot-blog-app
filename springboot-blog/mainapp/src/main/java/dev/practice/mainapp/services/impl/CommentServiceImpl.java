package dev.practice.mainapp.services.impl;

import dev.practice.mainapp.dtos.comment.CommentFullDto;
import dev.practice.mainapp.dtos.comment.CommentNewDto;
import dev.practice.mainapp.exceptions.ActionForbiddenException;
import dev.practice.mainapp.mappers.CommentMapper;
import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.Comment;
import dev.practice.mainapp.models.User;
import dev.practice.mainapp.repositories.CommentRepository;
import dev.practice.mainapp.services.CommentService;
import dev.practice.mainapp.utils.Validations;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final Validations validations;

    @Override
    public CommentFullDto createComment(Long articleId, CommentNewDto dto, String login) {
        User user = validations.checkUserExistsByUsernameOrEmail(login);
        validations.checkUserIsNotBanned(user);
        Article article = validations.checkArticleExist(articleId);
        validations.checkArticleIsPublished(article);
        Comment comment = CommentMapper.toComment(dto, user, article);
        Comment savedComment = commentRepository.save(comment);
        log.info("Comment with ID = " + savedComment.getCommentId() + " saved");
        return CommentMapper.toCommentFullDto(savedComment);
    }

    @Override
    public CommentFullDto updateComment(CommentNewDto dto, Long commentId, String login) {
        Comment comment = validations.isCommentExists(commentId);
        User user = validations.checkUserExistsByUsernameOrEmail(login);
        validations.checkUserIsCommentAuthor(user, comment);
        comment.setComment(dto.getComment());
        Comment updatedComment = commentRepository.save(comment);
        log.info("Comment with ID = " + updatedComment.getCommentId() + " updated");
        return CommentMapper.toCommentFullDto(updatedComment);
    }

    @Override
    public void deleteComment(Long commentId, String login) {
        User user = validations.checkUserExistsByUsernameOrEmail(login);
        Comment comment = validations.isCommentExists(commentId);
        if (user.equals(comment.getCommentAuthor()) || validations.isAdmin(login)) {
            log.info("Comment with ID = " + commentId + " deleted");
            commentRepository.deleteById(commentId);
        } else {
            log.info("ActionForbiddenException. Action forbidden for given user");
            throw new ActionForbiddenException("Action forbidden for given user");
        }
    }

    @Override
    public CommentFullDto getCommentById(Long commentId) {
        Comment comment = validations.isCommentExists(commentId);
        log.info("Return comment with ID = " + commentId);
        return CommentMapper.toCommentFullDto(comment);
    }

    @Override
    public List<CommentFullDto> getAllCommentsToArticle(Long articleId) {
        Article article = validations.checkArticleExist(articleId);
        log.info("Returned all comments to article with ID = " + articleId);
        return article.getComments().stream().map(CommentMapper::toCommentFullDto).collect(Collectors.toList());
    }
}
