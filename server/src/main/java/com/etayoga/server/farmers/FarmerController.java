package com.etayoga.server.farmers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.etayoga.server.farmers.dto.Farmer;

import lombok.AllArgsConstructor;

/**
 * Farmer controller class to handle HTTP requests
 */
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/farmers")
public class FarmerController {
    
    private final FarmerService farmerService;

    /**
     * Get a farmer by email
     * 
     * @param email the email
     * @return the farmer
     */
    @GetMapping("/get")
    public Farmer getFarmerByEmail(@RequestParam("email") String email) {
        return farmerService.getFarmerByEmail(email);
    }

}
