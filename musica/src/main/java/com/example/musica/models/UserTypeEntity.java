package com.example.musica.models;
import lombok.*;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@AllArgsConstructor
@Table(name = "korisnik_tip_entity")
public class UserTypeEntity {
    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;






    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }










    public UserTypeEntity(){

    }

}
