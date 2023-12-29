package dev.practice.mainapp;

import dev.practice.mainapp.repositories.RoleRepository;
import dev.practice.mainapp.utils.Validations;
import dev.practice.mainapp.models.Role;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@AllArgsConstructor
public class MainApp implements CommandLineRunner {


    private final RoleRepository roleRepository;
    private final Validations validations;

    public static void main(String[] args) {
        SpringApplication.run(MainApp.class, args);
    }

    @Override
    public void run(String... args){
        Role role = new Role(null, "ROLE_ADMIN");
        Role role2 = new Role(null, "ROLE_USER");
        if (!validations.isRoleExistsByName("ROLE_ADMIN")) {
            roleRepository.save(role);
        }
        if (!validations.isRoleExistsByName("ROLE_USER")) {
            roleRepository.save(role2);
        }
    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
