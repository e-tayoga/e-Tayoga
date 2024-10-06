package com.etayoga.server.alerts.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.etayoga.server.farmers.dto.Farmer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "alerts")
public class Alert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String type;

    private String message;

    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "sentAlerts")
    private Farmer sender;

    @OneToMany(mappedBy = "receivedAlerts")
    private List<Farmer> receivers;
}
