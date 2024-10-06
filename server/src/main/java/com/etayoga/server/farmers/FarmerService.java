package com.etayoga.server.farmers;

import com.etayoga.server.farmers.dto.Farmer;
import com.etayoga.server.farmers.dto.FarmerRequest;
import com.etayoga.server.users.UserRepository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Farmer service layer class to handle business logic
 */
@Service
@AllArgsConstructor
public class FarmerService {

    private final UserRepository userRepository;
    private final FarmerRepository farmerRepository;

    /**
     * Get all farmers
     * 
     * @return the list of farmers
     */
    public List<Farmer> getFarmers() {
        return farmerRepository.findAll();
    }

    /**
     * Get farmer by id
     *
     * @param id the id
     * @return the farmer
     */
    public Farmer getFarmer(Integer id) {
        return farmerRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Farmer with id " + id + " not found"));
    }

    /**
     * Get farmer by email
     * 
     * @param email the email
     * @return the farmer
     */
    public Farmer getFarmerByEmail(String email) {
        return farmerRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalStateException("Farmer with email " + email + " not found"));
    }

    /**
     * Get farmers by first name and last name
     * 
     * @param firstName the first name
     * @param lastName  the last name
     * @return the farmer
     */
    public List<Farmer> getFarmersByFirstNameAndLastName(String firstName, String lastName) {
        return farmerRepository.findByFirstNameAndLastName(firstName, lastName)
                .orElseThrow(() -> new IllegalStateException(
                        "Farmer with first name " + firstName + " and last name " + lastName + " not found"));
    }

    /**
     * Get farmer by farm name
     * 
     * @param farmName the farm name
     * @return the farmer
     */
    public Farmer getFarmerByFarmName(String farmName) {
        return farmerRepository.findByFarmName(farmName)
                .orElseThrow(() -> new IllegalStateException("Farmer with farm name " + farmName + " not found"));
    }

    /**
     * Add a new farmer
     * 
     * @param user_id       the user id
     * @param farmerRequest the farmer request
     */
    public void addFarmer(Integer user_id, FarmerRequest farmerRequest) {
        userRepository.findById(user_id)
                .ifPresentOrElse(user -> {
                    Farmer farmer = new Farmer(user.getId(), farmerRequest.getFirstName(), farmerRequest.getLastName(),
                            user.getEmail(), user.getPassword(), user.getRole(), null, farmerRequest.getFarmName(),
                            farmerRequest.getFarmCountry(), farmerRequest.getFarmCity(), farmerRequest.getFarmAddress(),
                            farmerRequest.getFarmPostalCode(), farmerRequest.getFarmLatitude(),
                            farmerRequest.getFarmLongitude(), 0);
                    farmerRepository.save(farmer);
                }, () -> {
                    throw new IllegalStateException("User with id " + user_id + " not found");
                });
    }

    /**
     * Update a farmer's personal photo
     * 
     * @param id the id
     * @param personalPhoto the personal photo
     */
    public void updateFarmerPersonalPhoto(Integer id, String personalPhoto) {
        farmerRepository.findById(id)
                .ifPresentOrElse(farmer -> {
                    farmer.setPersonalPhoto(personalPhoto);
                    farmerRepository.save(farmer);
                }, () -> {
                    throw new IllegalStateException("Farmer with id " + id + " not found");
                });
    }

    /**
     * Update a farmer information
     * 
     * @param id            the id
     * @param farmerRequest the farmer request
     */
    public void updateFarmer(Integer id, FarmerRequest farmerRequest) {
        farmerRepository.findById(id)
                .ifPresentOrElse(farmer -> {
                    farmer.setFirstName(farmerRequest.getFirstName());
                    farmer.setLastName(farmerRequest.getLastName());
                    farmer.setFarmName(farmerRequest.getFarmName());
                    farmer.setFarmCountry(farmerRequest.getFarmCountry());
                    farmer.setFarmCity(farmerRequest.getFarmCity());
                    farmer.setFarmAddress(farmerRequest.getFarmAddress());
                    farmer.setFarmPostalCode(farmerRequest.getFarmPostalCode());
                    farmer.setFarmLatitude(farmerRequest.getFarmLatitude());
                    farmer.setFarmLongitude(farmerRequest.getFarmLongitude());
                    farmerRepository.save(farmer);
                }, () -> {
                    throw new IllegalStateException("Farmer with id " + id + " not found");
                });
    }

    /**
     * Increment farmer experience points
     * 
     * @param id the id
     * @param xp the experience points
     */
    public void incrementFarmerXP(Integer id, int xp) {
        farmerRepository.findById(id)
                .ifPresentOrElse(farmer -> {
                    farmer.setXp(farmer.getXp() + xp);
                    farmerRepository.save(farmer);
                }, () -> {
                    throw new IllegalStateException("Farmer with id " + id + " not found");
                });
    }

    /**
     * Decrement farmer experience points
     * 
     * @param id the id
     * @param xp the experience points
     */
    public void decrementFarmerXP(Integer id, int xp) {
        farmerRepository.findById(id)
                .ifPresentOrElse(farmer -> {
                    farmer.setXp(farmer.getXp() - xp);
                    farmerRepository.save(farmer);
                }, () -> {
                    throw new IllegalStateException("Farmer with id " + id + " not found");
                });
    }

    /**
     * Delete a farmer
     * 
     * @param id the id
     */
    public void deleteFarmer(Integer id) {
        farmerRepository.findById(id)
                .ifPresentOrElse(farmer -> {
                    farmerRepository.delete(farmer);
                    userRepository.deleteById(farmer.getId());
                }, () -> {
                    throw new IllegalStateException("Farmer with id " + id + " not found");
                });
    }

}
