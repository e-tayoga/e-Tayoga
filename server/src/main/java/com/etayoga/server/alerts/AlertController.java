package com.etayoga.server.alerts;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.etayoga.server.alerts.dto.AlertRequest;
import com.etayoga.server.alerts.dto.AlertResponse;

@RestController
@RequestMapping("api/v1/alerts")
@AllArgsConstructor
public class AlertController {
    private final AlertService alertService;

    @GetMapping("/list")
    public ResponseEntity<List<AlertResponse>> getAlerts() {
        return ResponseEntity.ok(alertService.getAlerts());
    }

    @PostMapping("/send")
    public ResponseEntity<AlertResponse> sendAlert(@RequestBody AlertRequest alertRequest) {
        return ResponseEntity.ok(alertService.sendAlert(alertRequest));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteAlert(@RequestParam("id") Integer id) {
        alertService.deleteAlert(id);
        return ResponseEntity.ok().build();
    }
}
