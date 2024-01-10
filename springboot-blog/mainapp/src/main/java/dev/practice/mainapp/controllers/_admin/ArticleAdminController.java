package dev.practice.mainapp.controllers._admin;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.services.ArticleAdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/admin/articles")
public class ArticleAdminController {
    private final ArticleAdminService articleService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users/{authorId}")
    public ResponseEntity<List<ArticleFullDto>> getAllArticlesByUserId(
            @AuthenticationPrincipal UserDetails userDetails,
            @PathVariable("authorId") Long authorId,
            @RequestParam(defaultValue = "0") Integer from,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(defaultValue = "ALL", required = false) String status) {
        return new ResponseEntity<>(articleService.getAllArticlesByUserId(
                userDetails.getUsername(), authorId, from, size, status), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/{articleId}/publish")
    public ResponseEntity<ArticleFullDto> publishArticle(@AuthenticationPrincipal UserDetails userDetails,
                                                         @PathVariable("articleId") Long articleId,
                                                         @RequestParam boolean publish) {
        return new ResponseEntity<>(articleService.publishArticle(userDetails.getUsername(), articleId, publish),
                HttpStatus.OK);
    }
}
