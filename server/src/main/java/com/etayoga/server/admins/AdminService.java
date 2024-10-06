package com.etayoga.server.admins;

import org.springframework.stereotype.Service;

import com.etayoga.server.admins.dto.Admin;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    /**
     * Get all admins
     * 
     * @return the list of admins
     */
    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    /**
     * Get admin by id
     *
     * @param id the id
     * @return the admin
     */
    public Admin getAdmin(Integer id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Admin with id " + id + " not found"));
    }

    /**
     * Get admin by email
     * 
     * @param email the email
     * @return the admin
     */
    public Admin getAdminByEmail(String email) {
        return adminRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalStateException("Admin with email " + email + " not found"));
    }

    /**
     * Get admins by first name and last name
     * 
     * @param firstName the first name
     * @param lastName  the last name
     * @return the admin
     */
    public List<Admin> getAdminsByFirstNameAndLastName(String firstName, String lastName) {
        return adminRepository.findByFirstNameAndLastName(firstName, lastName)
                .orElseThrow(() -> new IllegalStateException(
                        "Admin with first name " + firstName + " and last name " + lastName + " not found"));
    }

    /**
     * Get admins by department
     * 
     * @param department the department
     * @return the admin
     */
    public List<Admin> getAdminsByDepartment(String department) {
        return adminRepository.findByDepartment(department)
                .orElseThrow(() -> new IllegalStateException("Admin with department " + department + " not found"));
    }

    /**
     * Update an admin's department
     * 
     * @param id         the id
     * @param department the department
     */
    public void updateAdminDepartment(Integer id, String department) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Admin with id " + id + " not found"));
        admin.setDepartment(department);
        adminRepository.save(admin);
    }
}
