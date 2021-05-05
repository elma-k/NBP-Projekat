package com.example.musica.dto;

import lombok.*;

import javax.persistence.*;
import java.io.*;
@Data
public class AudioFile implements Serializable {
    private Long id;



    private Byte[] file;

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
