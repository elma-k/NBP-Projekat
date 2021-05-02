package com.example.musica.models;
import com.fasterxml.jackson.annotation.*;
import lombok.*;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@AllArgsConstructor
@Table(name = "korisnikentity",uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")})
public class UserEntity {
    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private String username;
    @Email
    @Column
    private String email;

    @Column
    private Long type;

    @Column
    private String password;


    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    public AuthProvider getProvider() {
        return provider;
    }

    public void setProvider(AuthProvider provider) {
        this.provider = provider;
    }

    public String getEmail(){ return email;}
    public void setEmail(String email){ this.email=email;}
    public String getUsername(){ return username;}
    public void setUsername(String username){ this.username=username;}
    public Long getId() {
        return id;
    }
    public Long getType() {
        return type;
    }
    public void setType(Long type) {
        this.type=type;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }








    public UserEntity(){

    }

}
