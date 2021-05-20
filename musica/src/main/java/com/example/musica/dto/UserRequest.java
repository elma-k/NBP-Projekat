package com.example.musica.dto;



import lombok.*;

import javax.validation.constraints.*;
import java.io.*;

@Data
public class UserRequest implements Serializable {

    @NotBlank(message = "Email is mandatory")
    @Email
    private String email;
    @NotBlank(message = "Password is mandatory")
    private String password;
    @NotBlank(message = "Name is mandatory")
    private String name;
    @NotBlank(message = "Surname is mandatory")
    private String surname;
    @NotBlank(message = "Username is mandatory")
    private String username;





}