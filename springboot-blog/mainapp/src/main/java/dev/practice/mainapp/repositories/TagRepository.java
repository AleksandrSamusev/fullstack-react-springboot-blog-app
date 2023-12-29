package dev.practice.mainapp.repositories;

import dev.practice.mainapp.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findTagByName(String name);
}
