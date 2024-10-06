package com.etayoga.server.alerts;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.etayoga.server.alerts.dto.Alert;
import com.etayoga.server.alerts.dto.AlertRequest;
import com.etayoga.server.alerts.dto.AlertResponse;
import com.etayoga.server.farmers.FarmerRepository;
import com.etayoga.server.farmers.dto.Farmer;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AlertService {
    private final AlertRepository alertRepository;
    private final FarmerRepository farmerRepository;
  
    public List<AlertResponse> getAlerts() {
        return alertRepository.findAll().stream()
                .map(alert -> AlertResponse.builder()
                        .id(alert.getId())
                        .type(alert.getType())
                        .message(alert.getMessage())
                        .senderId(alert.getSender().getId())
                        .build())
                .toList();
    }

    public AlertResponse sendAlert(AlertRequest alertRequest) {
        Optional<Farmer> senderOptional = farmerRepository.findById(alertRequest.getSenderId());
        if (senderOptional.isEmpty()) {
            return null;
        } else {
            Farmer sender = senderOptional.get();
            Alert alert = Alert.builder()
                    .type(alertRequest.getType())
                    .message(alertRequest.getMessage())
                    .sender(sender)
                    .build();
            alertRepository.save(alert);
            return AlertResponse.builder()
                    .id(alert.getId())
                    .type(alert.getType())
                    .message(alert.getMessage())
                    .senderId(alert.getSender().getId())
                    .build();
        }
    }

    public void deleteAlert(Integer id) {
        alertRepository.deleteById(id);
    }
}
