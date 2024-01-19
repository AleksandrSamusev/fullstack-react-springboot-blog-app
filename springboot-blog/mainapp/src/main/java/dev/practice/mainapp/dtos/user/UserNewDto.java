package dev.practice.mainapp.dtos.user;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserNewDto {

    @NotBlank(message = "User's first name cannot be blank")
    @Length(max = 50, message = "User's first name should be 50 chars max")
    @Pattern(regexp = "^(\\p{L})+(?:[\\s-]+\\p{L}*)*$", message = "Incorrect firstName format")
    private String firstName;

    @NotBlank(message = "User's last name cannot be blank")
    @Length(max = 50, message = "User's last name should be 50 chars max")
    @Pattern(regexp = "^(\\p{L})+(?:[\\s-]+\\p{L}*)*$", message = "Incorrect lastName format")
    private String lastName;

    @NotBlank(message = "Username cannot be blank")
    @Length(max = 50, message = "Username should be 50 chars max")
    @Pattern(regexp = "^[A-Za-z0-9-_.]*$", message = "Incorrect username format")
    private String username;

    @NotBlank(message = "Password cannot be blank")
    @Length(min = 8, max = 30, message = "Password's length have to be min 8 max 30 symbols")
    @Pattern(regexp = "^(?!.* )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[_\\W^]).*$",
            message = "Incorrect password format")
    private String password;

    @NotBlank(message = "User email cannot be blank")
    @Email(regexp = ".+[@].+[\\.].{2,63}+", message = "Incorrect email format")
    private String email;

    @NotNull(message = "User's birth date cannot be null")
    @Past(message = "Birth date should be in the past")
    private LocalDate birthDate;

    private String avatar;

    @Length(max = 1000, message = "About should be 1000 char max")
    private String about;

}
