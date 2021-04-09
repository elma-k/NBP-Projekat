package com.example.musica.models;


import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.time.*;

@Entity
@Table(name = "album_entity")
public class AlbumEntity {


    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    private Long id;


    @Column
    private String title;
    @Column
    private LocalDateTime released;
    @Column
    private Long performer;

    public AlbumEntity(){}



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

    public LocalDateTime getReleased() {
        return released;
    }

    public void setReleased(LocalDateTime released) {
        this.released = released;
    }

    public Long getPerformer() {
        return performer;
    }

    public void setPerformer(Long performer) {
        this.performer = performer;
    }
}