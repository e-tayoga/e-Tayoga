package com.etayoga.server.alerts;

import com.etayoga.server.alerts.dto.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertRepository extends JpaRepository<Alert, Integer> {
}
