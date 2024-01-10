package dev.practice.mainapp.controllers._public;


import dev.practice.mainapp.dtos.tag.TagFullDto;
import dev.practice.mainapp.services.TagService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/public")
public class TagPublicController {

    private final TagService tagService;

    @GetMapping("/tags/articles/{articleId}")
    public ResponseEntity<List<TagFullDto>> getAllArticleTags(@PathVariable Long articleId) {
        return new ResponseEntity<>(tagService.getAllArticleTags(articleId), HttpStatus.OK);
    }

    @GetMapping("/tags/{tagId}")
    public ResponseEntity<TagFullDto> getTagById(@PathVariable Long tagId) {
        return new ResponseEntity<>(tagService.getTagById(tagId), HttpStatus.OK);
    }
}
