package dev.practice.mainapp.services.impl;

import dev.practice.mainapp.dtos.message.MessageFullDto;
import dev.practice.mainapp.dtos.message.MessageNewDto;
import dev.practice.mainapp.exceptions.ActionForbiddenException;
import dev.practice.mainapp.mappers.MessageMapper;
import dev.practice.mainapp.models.Message;
import dev.practice.mainapp.models.User;
import dev.practice.mainapp.repositories.MessageRepository;
import dev.practice.mainapp.repositories.UserRepository;
import dev.practice.mainapp.services.MessageService;
import dev.practice.mainapp.utils.Validations;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class MessageServiceImpl implements MessageService {
    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final Validations validations;

    @Override
    public MessageFullDto createMessage(Long recipientId, String currentUsername, MessageNewDto dto) {
        User recipient = validations.checkUserExist(recipientId);
        User sender = validations.checkUserExistsByUsernameOrEmail(currentUsername);
        validations.checkSenderIsNotRecipient(recipient.getUserId(), sender.getUserId());

        Message message = MessageMapper.toMessage(dto, recipient, sender);

        Message savedMessage = messageRepository.save(message);
        sender.getSentMessages().add(savedMessage);
        userRepository.save(sender);
        recipient.getReceivedMessages().add(savedMessage);
        userRepository.save(recipient);
        log.info("Message with ID = " + savedMessage.getMessageId() +
                " was sent by user with ID = " + sender.getUserId() +
                " to user with ID = " + recipientId);
        return MessageMapper.toMessageFullDto(savedMessage);
    }

    @Override
    public List<MessageFullDto> findAllSentMessages(String currentUsername) {
        User currentUser = validations.checkUserExistsByUsernameOrEmail(currentUsername);
        log.info("Returned all sent messages of user with ID = " + currentUser.getUserId());
        return MessageMapper.toListMessageFull(currentUser.getSentMessages().stream().toList());
    }

    @Override
    public List<MessageFullDto> findAllReceivedMessages(String currentUsername) {
        User currentUser = validations.checkUserExistsByUsernameOrEmail(currentUsername);
        List<Message> filteredMessage = currentUser.getReceivedMessages()
                .stream()
                .filter(message -> !message.getIsDeleted())
                .toList();

        log.info("Returned all received messages of user with ID = " + currentUser.getUserId());
        return MessageMapper.toListMessageFull(filteredMessage);
    }

    @Override
    public MessageFullDto findMessageById(Long messageId, String currentUsername) {
        User user = validations.checkUserExistsByUsernameOrEmail(currentUsername);
        Message message = validations.checkIfMessageExists(messageId);
        if (!message.getSender().equals(user) && !message.getRecipient().equals(user)) {
            log.info("ActionForbiddenException. Action forbidden for current user");
            throw new ActionForbiddenException("Action forbidden for current user");
        } else {
            log.info("Return message with ID = " + messageId + " to user with ID = " + user.getUserId());
            return MessageMapper.toMessageFullDto(message);
        }
    }

    @Override
    public void deleteMessage(Long messageId, String currentUsername) {
        Message message = validations.checkIfMessageExists(messageId);
        User user = validations.checkUserExistsByUsernameOrEmail(currentUsername);
        if (message.getRecipient().equals(user)) {
            message.setIsDeleted(Boolean.TRUE);
            messageRepository.save(message);
            log.info("Message with ID = " + messageId + " marked as deleted by user with ID = " + user.getUserId());
        } else {
            log.info("ActionForbiddenException. Action forbidden for current user");
            throw new ActionForbiddenException("Action forbidden for current user");
        }
    }
}