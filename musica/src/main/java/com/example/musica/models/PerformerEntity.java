package com.example.musica.models;


import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.time.*;

@Entity
@Table(name = "performer_entity")
public class PerformerEntity {


    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "id")
    private Long id;


    @Column
    private String name;

    @Column
    private String info;


    public PerformerEntity(){}



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}