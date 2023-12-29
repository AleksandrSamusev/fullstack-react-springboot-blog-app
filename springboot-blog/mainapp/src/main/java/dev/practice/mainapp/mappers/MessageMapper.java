package dev.practice.mainapp.mappers;

import dev.practice.mainapp.dtos.message.MessageFullDto;
import dev.practice.mainapp.dtos.message.MessageNewDto;
import dev.practice.mainapp.models.Message;
import dev.practice.mainapp.models.User;

import java.time.LocalDateTime;
import java.util.List;

public class MessageMapper {

    public static MessageFullDto toMessageFullDto(Message message) {
        return new MessageFullDto(
                message.getMessageId(),
                message.getMessage(),
                UserMapper.toUserShortDto(message.getSender()),
                UserMapper.toUserShortDto(message.getRecipient()),
                message.getCreated(),
                message.getIsDeleted()
        );
    }

    public static Message toMessage(MessageNewDto dto, User recipient, User currentUser) {
        Message message = new Message();
        message.setMessage(dto.getMessage());
        message.setCreated(LocalDateTime.now());
        message.setIsDeleted(Boolean.FALSE);
        message.setSender(currentUser);
        message.setRecipient(recipient);
        return message;
    }

    public static List<MessageFullDto> toListMessageFull(List<Message> messages) {
        return messages.stream().map(MessageMapper::toMessageFullDto).toList();
    }
}
