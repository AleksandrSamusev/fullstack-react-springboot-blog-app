package dev.practice.mainapp.repositories;

import dev.practice.mainapp.models.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {
}
