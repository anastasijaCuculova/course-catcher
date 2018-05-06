package com.demo.coursecatcher;

import com.demo.coursecatcher.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

@SpringBootApplication
public class CoursecatcherApplication {

    @Autowired
    private static UserRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(CoursecatcherApplication.class, args);
    }

    @Autowired
    public void authenticationManager(AuthenticationManagerBuilder builder) throws Exception {
        builder
                .userDetailsService(username -> repository.findByUsername("vansa111")
                        .orElse(null));
    }
}

