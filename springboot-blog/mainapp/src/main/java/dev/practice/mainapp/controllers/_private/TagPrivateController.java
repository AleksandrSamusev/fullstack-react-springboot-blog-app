package dev.practice.mainapp.controllers._private;

import dev.practice.mainapp.dtos.article.ArticleFullDto;
import dev.practice.mainapp.dtos.tag.TagFullDto;
import dev.practice.mainapp.dtos.tag.TagNewDto;
import dev.practice.mainapp.services.TagService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/private/tags")
public class TagPrivateController {
    private final TagService tagService;

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PostMapping("/articles/{articleId}")
    public ResponseEntity<TagFullDto> createTag(@Valid @RequestBody TagNewDto dto,
                                                @PathVariable Long articleId) {
        return new ResponseEntity<>(tagService.createTag(dto, articleId), HttpStatus.CREATED);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("/articles/{articleId}/add")
    public ResponseEntity<ArticleFullDto> addTagsToArticle(@AuthenticationPrincipal UserDetails userDetails,
                                                           @PathVariable Long articleId,
                                                           @RequestParam List<TagNewDto> tags) {
        return new ResponseEntity<>(tagService.addTagsToArticle(
                userDetails.getUsername(), articleId, tags), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("/articles/{articleId}/remove")
    public ResponseEntity<ArticleFullDto> removeTagsFromArticle(@AuthenticationPrincipal UserDetails userDetails,
                                                                @PathVariable Long articleId,
                                                                @RequestParam List<Long> tags) {
        return new ResponseEntity<>(tagService.removeTagsFromArticle(
                userDetails.getUsername(), articleId, tags), HttpStatus.OK);
    }


}
