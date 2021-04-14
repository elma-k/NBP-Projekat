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
import org.springframework.web.bind.annotation.*;

import java.util.*;


@Service
public class SongService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    SongRepository songRepository;


    @GetMapping("/all")
    public List<Song> findAll(){
        List<SongEntity> songs=songRepository.findAll();
        List<Song> responses=new ArrayList<Song>();
        for(SongEntity userEntity :songs) {
            Song song = new Song();

            BeanUtils.copyProperties(userEntity, song);
            responses.add(song);
        }
        return responses;
    }

    public String create( SongRequest songRequest) {

        SongEntity sobaEntity = new SongEntity();
        BeanUtils.copyProperties(songRequest, sobaEntity);
        songRepository.save(sobaEntity);
        return "Successfully created!";
    }


     public String update( Long id,  SongRequest song) {
        Optional<SongEntity> songEntity = songRepository.findById(id);

        if (songEntity == null) {
            return "Song with id"+id+" does not exist!";
        } else {
            SongEntity songEntity1=songEntity.get();

            BeanUtils.copyProperties(song ,songEntity1);
            songRepository.save(songEntity1);
            return "Updated successfully!";
        }

    }

   public  String deleteSong( Long id) {
         if(requestValidation.validateSongId(id) != null)
         return requestValidation.validateSongId(id);
        songRepository.deleteById(id);
        return "Song is deleted successfully";
    }

   public Song findSongById(@PathVariable Long id) {
        SongEntity songEntity= songRepository.findById(id).get();
        Song song=new Song();
        BeanUtils.copyProperties(songEntity,song);
        return song;
    }


}
