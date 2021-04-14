package com.example.musica.dto;

import lombok.*;

import java.io.*;


@Data
public class PerformerRequest implements Serializable {


    private String name;

    private String info;

}