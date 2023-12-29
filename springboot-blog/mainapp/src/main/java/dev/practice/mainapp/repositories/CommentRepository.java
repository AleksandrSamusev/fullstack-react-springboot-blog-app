package dev.practice.mainapp.repositories;

import dev.practice.mainapp.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
