package dev.practice.mainapp.repositories;

import dev.practice.mainapp.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
