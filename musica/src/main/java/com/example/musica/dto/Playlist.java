package com.example.musica.dto;

import lombok.*;

import java.io.*;
import java.time.*;

@Data
public class Playlist implements Serializable {
private Long id;

    private String title;

    private Long createdBy;

    private LocalDateTime created;
}