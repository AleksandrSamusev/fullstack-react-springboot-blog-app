package dev.practice.mainapp.services;

import dev.practice.mainapp.dtos.user.UserFullDto;
import dev.practice.mainapp.dtos.user.UserShortDto;
import dev.practice.mainapp.dtos.user.UserUpdateDto;

import java.util.List;

public interface UserService {
    List<UserShortDto> getAllUsers();

    List<UserFullDto> getAllUsers(String login);

    UserShortDto getUserById(Long id);

    UserFullDto getUserById(Long userId, String login);

    void deleteUser(Long userId, String login);

    UserFullDto banUser(Long userId, String login);

    UserFullDto unbanUser(Long userId, String login);

    UserFullDto updateUser(Long userId, UserUpdateDto dto, String login);

    UserFullDto changeRole(Long userId, String role, String login);
}
