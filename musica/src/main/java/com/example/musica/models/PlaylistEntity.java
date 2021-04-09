package com.example.musica.models;

import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.sql.Blob;
import java.time.*;
import java.util.*;

@Entity
@Table(name = "playlist_entity")
public class PlaylistEntity {

    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //@OneToOne
    private Long id;

    @Column
    private String title;
    @Column
    private Long createdBy;
    @Column
    private LocalDateTime created;


    @ManyToMany(mappedBy = "playlistEntityList")
    List<SongEntity> students;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Long createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public PlaylistEntity() {
    }
}
