package com.example.musica.dto;

import lombok.*;

import javax.persistence.*;
import java.io.*;
@Data
public class AudioFileRequest implements Serializable {


    private Byte[] file;
    public Byte[] getFile() {
        return file;
    }

    public void setFile(Byte[] file) {
        this.file = file;
    }
}
