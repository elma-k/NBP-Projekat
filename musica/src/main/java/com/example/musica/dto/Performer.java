package com.example.musica.dto;

import lombok.*;
import org.springframework.data.annotation.*;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.io.*;
@Data
public class Performer implements Serializable {

    private Long id;

    private String name;

    private String info;

}
