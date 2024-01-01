package dev.practice.mainapp.controllers._public;

import dev.practice.mainapp.dtos.comment.CommentFullDto;
import dev.practice.mainapp.services.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/public/comments")
public class CommentPublicController {

    private final CommentService commentService;

    @GetMapping("/{commentId}")
    public ResponseEntity<CommentFullDto> getCommentById(@PathVariable Long commentId) {
        return new ResponseEntity<>(commentService.getCommentById(commentId), HttpStatus.OK);
    }

    @GetMapping("/articles/{articleId}")
    public ResponseEntity<List<CommentFullDto>> getAllCommentsToArticle(@PathVariable Long articleId) {
        return new ResponseEntity<>(commentService.getAllCommentsToArticle(articleId), HttpStatus.OK);
    }

}
