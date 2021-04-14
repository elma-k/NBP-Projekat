package com.example.musica.dto;

import lombok.*;

import javax.persistence.*;
import java.io.*;
@Data
public class Genre implements Serializable {

    private Long id;
    private String title;
}
