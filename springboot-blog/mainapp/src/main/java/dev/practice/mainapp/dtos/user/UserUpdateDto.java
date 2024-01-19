package dev.practice.mainapp.dtos.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateDto {

    @Length(max = 50)
    private String firstName;

    @Length(max = 50)
    private String lastName;

    @Length(max = 50)
    private String username;

    private String password;

    @Email
    @Length(max = 50)
    private String email;

    @Past
    private LocalDate birthDate;

    private String avatar;

    @Length(max = 1000)
    String about;

}
