package com.example.musica.models;


import com.sun.mail.iap.*;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.sql.*;
import java.time.*;

@Entity
@Table(name = "audio_file_entity")
public class AudioFileEntity {


    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    private Long id;


    @Column
    private Byte[] file;


    public AudioFileEntity(){}



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Byte[] getFile() {
        return file;
    }

    public void setFile(Byte[] file) {
        this.file = file;
    }
}