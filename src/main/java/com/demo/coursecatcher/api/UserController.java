package com.demo.coursecatcher.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping(value = "/")
    public String hello() {
        return "Hello";
    }

    @GetMapping(value = "/private")
    public String privateS() {
        return "private";
    }
}
