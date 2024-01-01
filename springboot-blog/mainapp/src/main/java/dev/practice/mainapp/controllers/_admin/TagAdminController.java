package dev.practice.mainapp.controllers._admin;

import dev.practice.mainapp.services.TagService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("api/v1/admin")
public class TagAdminController {

    private final TagService tagService;

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/tags/{tagId}")
    public ResponseEntity<?> deleteTag(@AuthenticationPrincipal UserDetails userDetails,
                                       @PathVariable Long tagId) {
        tagService.deleteTag(tagId, userDetails.getUsername());
        return new ResponseEntity<>("Tag with id " + tagId + " deleted", HttpStatus.OK);
    }

}
