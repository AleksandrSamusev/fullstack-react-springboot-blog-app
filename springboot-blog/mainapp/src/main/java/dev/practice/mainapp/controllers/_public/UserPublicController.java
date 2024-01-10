package dev.practice.mainapp.controllers._public;

import dev.practice.mainapp.dtos.user.UserFullDto;
import dev.practice.mainapp.dtos.user.UserShortDto;
import dev.practice.mainapp.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/public")
public class UserPublicController {

    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<UserShortDto>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<UserShortDto> getUserById(@PathVariable Long userId) {
        return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
    }

    @PatchMapping("/users/{userId}/roles")
    public ResponseEntity<UserFullDto> changeRole(@PathVariable Long userId,
                                                  @RequestParam String name) {
        return new ResponseEntity<>(userService.changeRole(userId, name), HttpStatus.OK);
    }

}
