package com.example.musica.service;

import com.example.musica.dto.*;
import com.example.musica.models.*;
import com.example.musica.repository.*;
import com.example.musica.validation.*;
import org.hibernate.exception.*;
import org.springframework.beans.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.password.*;
import org.springframework.stereotype.*;

import java.util.*;


@Service
public class SongService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    SongRepository songRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;


    public List<Song> findAll(){
        List<SongEntity> korisnici=songRepository.findAll();
        List<Song> responses=new ArrayList<Song>();
        for(SongEntity userEntity :korisnici) {
            Song song = new Song();

            BeanUtils.copyProperties(userEntity, song);
            responses.add(song);
        }
        return responses;
    }




}
