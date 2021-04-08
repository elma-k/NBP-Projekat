package com.example.musica.dto;

import lombok.*;

import javax.validation.constraints.*;
import java.io.*;

import lombok.*;

import javax.validation.constraints.*;
import java.io.*;

@Data
public class User implements Serializable {

    private Long id;
    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    private String password;
    private String email;
    private String role;




}