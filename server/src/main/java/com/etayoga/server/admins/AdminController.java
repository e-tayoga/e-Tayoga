package com.etayoga.server.admins;

import com.etayoga.server.admins.dto.Admin;
import com.etayoga.server.farmers.FarmerService;
import com.etayoga.server.farmers.dto.Farmer;
import com.etayoga.server.farmers.dto.FarmerRequest;
import com.etayoga.server.users.UserService;
import com.etayoga.server.users.dto.User;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Admin controller class to handle HTTP requests
 */
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/admins")
public class AdminController {

    private final UserService userService;
    private final AdminService adminService;
    private final FarmerService farmerService;


    /**************************************************************************
     * Users management
     **************************************************************************/

    /**
     * Get all users
     * 
     * @return the list of users
     */
    @GetMapping("/users/list")
    public List<User> getUsers() {
        return userService.getUsers();
    }


    /**************************************************************************
     * Admins management
     **************************************************************************/

    /**
     * Get all admins
     * 
     * @return the list of admins
     */
    @GetMapping("/admins/list")
    public List<Admin> getAdmins() {
        return adminService.getAdmins();
    }

    /**
     * Get an admin by id
     * 
     * @param id the id
     * @return the admin
     */
    @GetMapping("/admins/get.id")
    public Admin getAdmin(@RequestParam("id") Integer id) {
        return adminService.getAdmin(id);
    }

    /**
     * Get an admin by email
     * 
     * @param email the email
     * @return the admin
     */
    @GetMapping("/admins/get.email")
    public Admin getAdminByEmail(@RequestParam("email") String email) {
        return adminService.getAdminByEmail(email);
    }

    /**
     * Get an admin by first name and last name
     * 
     * @param firstName the first name
     * @param lastName  the last name
     * @return the admin
     */
    @GetMapping("/admins/get.name")
    public List<Admin> getAdminsByFirstNameAndLastName(
        @RequestParam("firstName") String firstName, 
        @RequestParam("lastName") String lastName
    ) {
        return adminService.getAdminsByFirstNameAndLastName(firstName, lastName);
    }

    /**
     * Get an admin by department
     * 
     * @param department the department
     * @return the admin
     */
    @GetMapping("/admins/get.department")
    public List<Admin> getAdminsByDepartment(@RequestParam("department") String department) {
        return adminService.getAdminsByDepartment(department);
    }

    /**
     * Update an admin's department
     * 
     * @param id         the id
     * @param department the department
     */
    @PutMapping("/admins/update.department")
    public void updateAdminDepartment(
        @RequestParam("id") Integer id, 
        @RequestParam("department") String department
    ) {
        adminService.updateAdminDepartment(id, department);
    }


    /**************************************************************************
     * Farmers management
     **************************************************************************/

    /**
     * Get all farmers
     * 
     * @return the list of farmers
     */
    @GetMapping("/farmers/list")
    public List<Farmer> getFarmers() {
        return farmerService.getFarmers();
    }

    /**
     * Get a farmer by id
     * 
     * @param id the id
     * @return the farmer
     */
    @GetMapping("/farmers/get.id")
    public Farmer getFarmer(@RequestParam("id") Integer id) {
        return farmerService.getFarmer(id);
    }

    /**
     * Get a farmer by email
     * 
     * @param email the email
     * @return the farmer
     */
    @GetMapping("/farmers/get.email")
    public Farmer getFarmerByEmail(@RequestParam("email") String email) {
        return farmerService.getFarmerByEmail(email);
    }

    /**
     * Get a farmer by first name and last name
     * 
     * @param firstName the first name
     * @param lastName  the last name
     * @return the farmer
     */
    @GetMapping("/farmers/get.name")
    public List<Farmer> getFarmersByFirstNameAndLastName(
        @RequestParam("firstName") String firstName, 
        @RequestParam("lastName") String lastName
    ) {
        return farmerService.getFarmersByFirstNameAndLastName(firstName, lastName);
    }

    /**
     * Get a farmer by farm name
     * 
     * @param farmName the farm name
     * @return the farmer
     */
    @GetMapping("/farmers/get.farmName")
    public Farmer getFarmerByFarmName(@RequestParam("farmName") String farmName) {
        return farmerService.getFarmerByFarmName(farmName);
    }

    /**
     * Add a new farmer
     * 
     * @param user_id       the user id
     * @param farmerRequest the farmer request
     */
    @PostMapping("/farmers/add")
    public void addFarmer(
        @RequestParam("user_id") Integer user_id, 
        @RequestBody FarmerRequest farmerRequest
    ) {
        farmerService.addFarmer(user_id, farmerRequest);
    }

    /**
     * Update a farmer's personal photo
     * 
     * @param id           the id
     * @param personalPhoto the personal photo
     */
    @PutMapping("/farmers/update.personalPhoto")
    public void updateFarmerPersonalPhoto(
        @RequestParam("id") Integer id, 
        @RequestParam("personalPhoto") String personalPhoto
    ) {
        farmerService.updateFarmerPersonalPhoto(id, personalPhoto);
    }

    /**
     * Update a farmer's information
     * 
     * @param id           the id
     * @param farmRequest  the farm request
     */
    @PutMapping("/farmers/update")
    public void updateFarmerInfo(
        @RequestParam("id") Integer id, 
        @RequestBody FarmerRequest farmRequest
    ) {
        farmerService.updateFarmer(id, farmRequest);
    }

    /**
     * Increment a farmer's experience points
     * 
     * @param id the id
     * @param xp the experience points
     */
    @PutMapping("/farmers/increment.xp")
    public void incrementFarmerXP(
        @RequestParam("id") Integer id, 
        @RequestParam("xp") int xp
    ) {
        farmerService.incrementFarmerXP(id, xp);
    }

    /**
     * Decrement a farmer's experience points
     * 
     * @param id the id
     * @param xp the experience points
     */
    @PutMapping("/farmers/decrement.xp")
    public void decrementFarmerXP(
        @RequestParam("id") Integer id, 
        @RequestParam("xp") int xp
    ) {
        farmerService.decrementFarmerXP(id, xp);
    }

    /**
     * Delete a farmer
     * 
     * @param id the id
     */
    @DeleteMapping("/farmers/delete")
    public void deleteFarmer(@RequestParam("id") Integer id) {
        farmerService.deleteFarmer(id);
    }


    /**************************************************************************
     * 
     **************************************************************************/
    
    
}
