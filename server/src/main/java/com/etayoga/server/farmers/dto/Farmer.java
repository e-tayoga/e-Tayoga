package com.etayoga.server.farmers.dto;

import java.util.List;

import com.etayoga.server.alerts.dto.Alert;
import com.etayoga.server.users.dto.Role;
import com.etayoga.server.users.dto.User;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Farmer entity class
 */
@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "farmers")
public class Farmer extends User {

    private String personalPhoto;

    private String farmName;

    private String farmCountry;

    private String farmCity;

    private String farmAddress;

    private String farmPostalCode;

    private double farmLatitude;

    private double farmLongitude;

    private int xp;

    @ManyToMany(mappedBy = "receivers")
    private List<Alert> receivedAlerts;

    @ManyToOne
    private List<Alert> sentAlerts;

    /**
     * Constructor to initialize a Farmer with FARMER role
     *
     * @param id           the id of the farmer
     * @param firstName    the first name
     * @param lastName     the last name
     * @param email        the email
     * @param password     the password
     * @param personalPhoto the personal photo
     * @param farmName     the farm name
     * @param farmCountry  the farm country
     * @param farmCity     the farm city
     * @param farmAddress  the farm address
     * @param farmPostalCode the farm postal code
     * @param farmLatitude the farm latitude
     * @param farmLongitude the farm longitude
     * @param xp           how much experience points the farmer has         
     */
    public Farmer(Integer id, String firstName, String lastName, String email, String password, Role role, String personalPhoto, String farmName, String farmCountry, String farmCity, String farmAddress, String farmPostalCode, double farmLatitude, double farmLongitude, int xp) {
        super(id, firstName, lastName, email, password, role);
        this.personalPhoto = personalPhoto;
        this.farmName = farmName;
        this.farmCountry = farmCountry;
        this.farmCity = farmCity;
        this.farmAddress = farmAddress;
        this.farmPostalCode = farmPostalCode;
        this.farmLatitude = farmLatitude;
        this.farmLongitude = farmLongitude;
        this.xp = xp;
    }
}
