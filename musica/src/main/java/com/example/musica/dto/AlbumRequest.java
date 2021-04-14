package com.example.musica.dto;

import lombok.*;

import java.io.*;
import java.time.*;


@Data
public class AlbumRequest implements Serializable {
    private String title;

    private LocalDateTime released;

    private Long performer;
}
