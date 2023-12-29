package dev.practice.mainapp.exceptions;

public class ActionForbiddenException extends RuntimeException {
    public ActionForbiddenException(String message) {
        super(message);
    }
}
