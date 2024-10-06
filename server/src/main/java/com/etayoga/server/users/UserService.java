package com.etayoga.server.users;

import lombok.AllArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.etayoga.server.users.dto.User;

import java.util.List;

/**
 * User service layer class to handle business logic
 */
@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * Get all users
     * 
     * @return the list of users
     */
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    /**
     * Get user by email
     *
     * @param email the email
     * @return the user
     */
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalStateException("User with email " + email + " not found"));
    }

    /**
     * Get user by id
     *
     * @param id the id
     * @return the user
     */
    public User getUser(Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("User with id " + id + " not found"));
    }

    /**
     * Update a user's email
     * 
     * @param id the id
     * @param email the email
     */
    public void updateUserEmail(Integer id, String email) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("User with id " + id + " not found"));
        // TODO: validate email address
        user.setEmail(email);
        userRepository.save(user);
    }

    /**
     * Update a user's password
     * 
     * @param id the id
     * @param oldPassword the old password
     * @param newPassword the new password
     */
    public void updateUserPassword(Integer id, String oldPassword, String newPassword) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("User with id " + id + " not found"));
        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new IllegalStateException("Old password is incorrect");
        }
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

}
