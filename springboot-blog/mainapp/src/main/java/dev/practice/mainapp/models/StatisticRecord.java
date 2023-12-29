package dev.practice.mainapp.models;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StatisticRecord {
    private Long statisticRecordId;
    @NotBlank(message = "Service name cannot be blank")
    private String serviceName = "mainApp";
    @NotBlank(message = "ip address cannot be blank")
    private String ip;
    @NotBlank(message = "Uri cannot be blank")
    private String uri;
    @NotNull(message = "Timestamp cannot be null")
    private LocalDateTime timestamp;
}
