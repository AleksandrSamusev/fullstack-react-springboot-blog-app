package dev.practice.mainapp.dtos.comment;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentNewDto {

    @NotBlank(message = "Comment cannot be blank")
    @Length(max = 500, message = "Comment length should be 500 chars max")
    private String comment;

}
