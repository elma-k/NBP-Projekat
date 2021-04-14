package com.example.musica.dto;

import lombok.*;

import java.io.*;

@Data
public class SongPlaylistRequest implements Serializable {

    private Long song;
    private Long playlist;
}

