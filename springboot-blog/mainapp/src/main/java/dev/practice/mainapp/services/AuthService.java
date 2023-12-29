package dev.practice.mainapp.services;

import dev.practice.mainapp.dtos.JWTAuthResponse;
import dev.practice.mainapp.dtos.user.LoginDto;
import dev.practice.mainapp.dtos.user.UserNewDto;

public interface AuthService {
    String register(UserNewDto userNewDto);

    JWTAuthResponse login(LoginDto loginDto);
}
