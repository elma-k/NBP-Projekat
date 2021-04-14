package com.example.musica.dto;

import lombok.*;

import javax.validation.constraints.*;
import java.io.*;
@Data
public class SongRequest implements Serializable {

@NotNull
    private String title;
    @NotNull
    private Long audio;
    @NotNull
    private Long album;
    @NotNull
    private Long genre;

    private Long playlistId;
}
