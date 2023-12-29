package dev.practice.mainapp.mappers;

import dev.practice.mainapp.dtos.tag.TagFullDto;
import dev.practice.mainapp.dtos.tag.TagNewDto;
import dev.practice.mainapp.dtos.tag.TagShortDto;
import dev.practice.mainapp.models.Article;
import dev.practice.mainapp.models.Tag;

import java.util.stream.Collectors;

public class TagMapper {

    public static TagFullDto toTagFullDto(Tag tag) {
        return new TagFullDto(
                tag.getTagId(),
                tag.getName(),
                tag.getArticles().stream().map(Article::getArticleId).collect(Collectors.toSet())
        );
    }

    public static TagShortDto toTagShortDto(Tag tag) {
        return new TagShortDto(tag.getTagId(),
                tag.getName());
    }

    public static Tag toTag(TagNewDto dto) {
        Tag tag = new Tag();
        tag.setName(dto.getName().trim());
        return tag;
    }
}
