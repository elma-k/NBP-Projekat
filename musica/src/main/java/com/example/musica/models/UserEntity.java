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

    @Email
    @Column
    private String email;

    @Column(name="role",length = 10485760)
    @Size(min = 2, max = 10485760)
    private String role;

    @Column(name="password",length = 10485760)
    @Size(min = 2, max = 10485760)
    private String password;




    public String getEmail(){ return email;}
    public void setEmail(String email){ this.email=email;}
    public String getRole(){ return role;}
    public void setRole(String role){ this.role=role;}
    public Long getId() {
        return id;
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
