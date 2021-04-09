package com.example.musica.models;


import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.sql.Clob;

@Entity
@Table(name = "genre_entity")
public class GenreEntity {


    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    private Long id;


    @Column
    private String title;


    public GenreEntity(){}



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



}