package dev.practice.statApp.services;

import dev.practice.statApp.models.StatisticRecord;

import java.time.LocalDateTime;
import java.util.List;

public interface StatsService {
    StatisticRecord addStats(StatisticRecord statisticRecord);

    List<StatisticRecord> getStats(LocalDateTime start, LocalDateTime end, List<String> uris);
}
