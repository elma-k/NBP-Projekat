package com.example.musica.rest;

import com.example.musica.dto.*;
import com.example.musica.exception.*;
import com.example.musica.models.*;
import com.example.musica.repository.*;
import com.example.musica.service.*;
import io.swagger.annotations.*;
import lombok.*;
import org.springframework.amqp.rabbit.core.*;
import org.springframework.http.*;
import org.springframework.security.access.prepost.*;
import org.springframework.web.bind.annotation.*;
import javax.validation.*;
import java.util.*;


@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

    public static final String topicExchangeName = "spring-boot-exchange";

    private UserService userService;

    private UserRepository userRepository;

   

    @ApiOperation(value = "Create User", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping()
    public String create(@Valid  @RequestBody UserRequest korisnik) {
        return userService.create(korisnik);
    }

    @ApiOperation(value = "Get All Users", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<User> all() {
        return userService.findAll();
    }

    @ApiOperation(value = "Get User By Id", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/{id}")
    User findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @ApiOperation(value = "Update User By Id", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @PutMapping()
    String update(@Valid  @RequestBody User user) {
        return userService.updateKorisnik(user);}


    @ApiOperation(value = "Delete User By Id", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @DeleteMapping("/{id}")
    String deleteKorisnik(@PathVariable Long id) {
        return userService.deleteById(id);
    }








}
