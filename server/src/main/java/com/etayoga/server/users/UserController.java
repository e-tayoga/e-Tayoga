package com.etayoga.server.users;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

/**
 * User controller class to handle HTTP requests
 */
@AllArgsConstructor
@RestController
@RequestMapping(path = "api/v1/users")
public class UserController {

    private final UserService userService;

    /**
     * Update a user's email
     * 
     * @param id    the id
     * @param email the email
     */
    @PutMapping(path = "edit.email")
    public void updateUserEmail(
        @RequestParam("id") Integer id, 
        @RequestParam("email") String email
    ) {
        userService.updateUserEmail(id, email);
    }

    /**
     * Update a user's password
     * 
     * @param id          the id
     * @param oldPassword the old password
     * @param newPassword the new password
     */
    @PutMapping(path = "edit.password")
    public void updateUserPassword(
        @RequestParam("id") Integer id, 
        @RequestParam("oldPassword") String oldPassword,
        @RequestParam("newPassword") String newPassword
    ) {
        userService.updateUserPassword(id, oldPassword, newPassword);
    }

}
