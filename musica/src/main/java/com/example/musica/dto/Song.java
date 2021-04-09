package com.example.musica.dto;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.*;

import lombok.*;

import javax.validation.constraints.*;
import java.io.*;

@Data
public class Song implements Serializable {

    private Long id;
    private String title;

    private Long audio;

    private Long album;

    private Long genre;

}