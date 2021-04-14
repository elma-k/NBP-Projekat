package com.example.musica.models;


import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.sql.Clob;
import java.util.*;

@Entity
@Table(name = "song_playlist_entity")
public class SongPlaylistEntity {
    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    private Long id;


    @Column
    private Long songId;

    @Column
    private Long playlistId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSongId() {
        return songId;
    }

    public void setSongId(Long songId) {
        this.songId = songId;
    }

    public Long getPlaylistId() {
        return playlistId;
    }

    public void setPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
    }
}



