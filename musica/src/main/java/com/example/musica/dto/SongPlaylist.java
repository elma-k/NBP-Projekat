package com.example.musica.dto;

import lombok.*;

import java.io.*;
@Data
public class SongPlaylist implements Serializable {
    private Long id;
    private Long song;
    private Long playlist;
}
