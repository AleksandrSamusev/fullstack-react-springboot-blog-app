package dev.practice.mainapp.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.practice.mainapp.config.SecurityConfig;
import dev.practice.mainapp.controllers._admin.UserAdminController;
import dev.practice.mainapp.dtos.user.UserFullDto;
import dev.practice.mainapp.exceptions.ActionForbiddenException;
import dev.practice.mainapp.exceptions.ResourceNotFoundException;
import dev.practice.mainapp.repositories.RoleRepository;
import dev.practice.mainapp.security.JWTAuthenticationEntryPoint;
import dev.practice.mainapp.security.JWTTokenProvider;
import dev.practice.mainapp.services.UserService;
import dev.practice.mainapp.utils.Validations;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.HashSet;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserAdminController.class)
@Import(SecurityConfig.class)
public class UserAdminControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RoleRepository roleRepository;
    @MockBean
    private Validations validations;
    @MockBean
    private JWTTokenProvider jwtTokenProvider;
    @MockBean
    private UserService userService;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    UserDetailsService userDetailsService;
    @MockBean
    JWTAuthenticationEntryPoint jwtAuthenticationEntryPoint;


    private final UserFullDto bannedUser = new UserFullDto(1L, "John", "Doe",
            "bannedUser", "password", "johnDoe@test.test",
            LocalDate.of(2000, 12, 27), new HashSet<>(),
            "Hi! I'm John", true, new HashSet<>(), new HashSet<>(),
            new HashSet<>(), new HashSet<>());

    private final UserFullDto notBannedUser = new UserFullDto(1L, "John", "Doe",
            "notBannedUser", "password", "johnDoe@test.test",
            LocalDate.of(2000, 12, 27), new HashSet<>(),
            "Hi! I'm John", false, new HashSet<>(), new HashSet<>(),
            new HashSet<>(), new HashSet<>());

    @Test
    @WithMockUser(roles = "ADMIN")
    public void user_test55_Given_ValidIds_When_banUser_200_OK() throws Exception {

        when(userService.banUser(anyLong(), anyString())).thenReturn(bannedUser);

        mockMvc.perform(patch("/api/v1/admin/users/{userId}/ban", bannedUser.getUserId())
                        .characterEncoding(StandardCharsets.UTF_8)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    public void user_test56_Given_UserNotExists_When_banUser_404_NOT_FOUND() throws Exception {

        when(userService.banUser(anyLong(), anyString())).thenThrow(
                new ResourceNotFoundException("User with given ID = 1 not found"));

        mockMvc.perform(patch("/api/v1/admin/users/{userId}/ban", bannedUser.getUserId())
                        .characterEncoding(StandardCharsets.UTF_8)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    @WithMockUser
    public void user_test57_Given_CurrentNotAdmin_When_banUser_403_FORBIDDEN() throws Exception {

        when(userService.banUser(anyLong(), anyString())).thenThrow(
                new ActionForbiddenException("Action forbidden for current user"));

        mockMvc.perform(patch("/api/v1/admin/users/{userId}/ban", bannedUser.getUserId())
                        .characterEncoding(StandardCharsets.UTF_8)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    public void user_test58_Given_ValidIds_When_unbanUser_200_OK() throws Exception {

        when(userService.unbanUser(anyLong(), anyString())).thenReturn(notBannedUser);

        mockMvc.perform(patch("/api/v1/admin/users/{userId}/unban", notBannedUser.getUserId())
                        .characterEncoding(StandardCharsets.UTF_8)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    public void user_test59_Given_UserNotExists_When_unbanUser_404_NOT_FOUND() throws Exception {

        when(userService.unbanUser(anyLong(), anyString())).thenThrow(
                new ResourceNotFoundException("User with given ID = 1 not found"));

        mockMvc.perform(patch("/api/v1/admin/users/{userId}/unban", notBannedUser.getUserId())
                        .characterEncoding(StandardCharsets.UTF_8)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    @WithMockUser
    public void user_test60_Given_CurrentNotAdmin_When_unbanUser_403_FORBIDDEN() throws Exception {

        when(userService.unbanUser(anyLong(), anyString())).thenThrow(
                new ActionForbiddenException("Action forbidden for current user"));

        mockMvc.perform(patch("/api/v1/admin/users/{userId}/unban", notBannedUser.getUserId())
                        .characterEncoding(StandardCharsets.UTF_8)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isForbidden());
    }
}
