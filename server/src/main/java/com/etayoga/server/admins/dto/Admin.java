package com.etayoga.server.admins.dto;

import com.etayoga.server.users.dto.Role;
import com.etayoga.server.users.dto.User;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Admin entity class
 */
@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "admins")
public class Admin extends User {

    private String department;

    /**
     * Constructor to initialize an Admin with ADMIN role
     *
     * @param id         the id of the admin
     * @param firstName  the first name
     * @param lastName   the last name
     * @param email      the email
     * @param password   the password
     * @param department the department
     */
    public Admin(Integer id, String firstName, String lastName, String email, String password, String department) {
        super(id, firstName, lastName, email, password, Role.ADMIN);
        this.department = department;
    }
    
}
