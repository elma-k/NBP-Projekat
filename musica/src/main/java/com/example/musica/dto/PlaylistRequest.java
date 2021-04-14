package com.example.musica.dto;

import lombok.*;
import org.springframework.data.annotation.*;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.io.*;
import java.time.*;
@Data
public class PlaylistRequest implements Serializable {


    private String title;

    private Long createdBy;

    private LocalDateTime created;
}
