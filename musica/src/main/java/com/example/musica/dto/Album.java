package com.example.musica.dto;

import lombok.*;

import javax.persistence.*;
import java.io.*;
import java.time.*;
@Data
public class Album implements Serializable {
    private Long id;



    private String title;

    private LocalDateTime released;

    private Long performer;
}
