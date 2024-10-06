package com.etayoga.server.farmers;

import com.etayoga.server.farmers.dto.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * Farmer repository interface to interact with the database
 */
public interface FarmerRepository extends JpaRepository<Farmer, Integer> {
    Optional<Farmer> findByEmail(String email);
    Optional<List<Farmer>> findByFirstNameAndLastName(String firstName, String lastName);
    Optional<Farmer> findByFarmName(String farmName);
}
