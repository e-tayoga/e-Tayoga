package com.etayoga.server.admins;

import com.etayoga.server.admins.dto.Admin;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Admin repository interface to interact with the database
 */
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Optional<Admin> findByEmail(String email);
    Optional<List<Admin>> findByFirstNameAndLastName(String firstName, String lastName);
    Optional<List<Admin>> findByDepartment(String department);
}
