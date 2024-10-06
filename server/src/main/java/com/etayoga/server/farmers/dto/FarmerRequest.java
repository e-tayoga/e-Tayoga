package com.etayoga.server.farmers.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class FarmerRequest {
    private String firstName;
    private String lastName;
    private String farmName;
    private String farmCountry;
    private String farmCity;
    private String farmAddress;
    private String farmPostalCode;
    private double farmLatitude;
    private double farmLongitude;
}
