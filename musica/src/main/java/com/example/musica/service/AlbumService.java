package com.example.musica.service;

import com.example.musica.dto.*;
import com.example.musica.models.*;
import com.example.musica.repository.*;
import com.example.musica.validation.*;
import org.springframework.beans.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@Service
public class AlbumService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    AlbumRepository AlbumRepository;


    @GetMapping("/all")
    public List<Album> findAll(){
        List<AlbumEntity> Albums=AlbumRepository.findAll();
        List<Album> responses=new ArrayList<Album>();
        for(AlbumEntity albumEntity :Albums) {
            Album Album = new Album();

            BeanUtils.copyProperties(albumEntity, Album);
            responses.add(Album);
        }
        return responses;
    }
    @PostMapping()
    public String create(@RequestBody AlbumRequest AlbumRequest) {

        AlbumEntity sobaEntity = new AlbumEntity();
        BeanUtils.copyProperties(AlbumRequest, sobaEntity);
        AlbumRepository.save(sobaEntity);
        return "Successfully created!";
    }

    @PutMapping("/{id}")
   public String update(@PathVariable Long id, @RequestBody AlbumRequest Album) {
        Optional<AlbumEntity> AlbumEntity = AlbumRepository.findById(id);

        if (AlbumEntity == null) {
            return "Album with id"+id+" does not exist!";
        } else {
            AlbumEntity AlbumEntity1=AlbumEntity.get();

            BeanUtils.copyProperties(Album ,AlbumEntity1);
            AlbumRepository.save(AlbumEntity1);
            return "Updated successfully!";
        }

    }
    @DeleteMapping("/{id}")
   public String deleteAlbum(@PathVariable Long id) {
         if(requestValidation.validateAlbumId(id) != null)
         return requestValidation.validateAlbumId(id);
        AlbumRepository.deleteById(id);
        return "Album is deleted successfully";
    }
    @GetMapping("/{id}")
   public Album findAlbumById(@PathVariable Long id) {
        AlbumEntity AlbumEntity= AlbumRepository.findById(id).get();
        Album Album=new Album();
        BeanUtils.copyProperties(AlbumEntity,Album);
        return Album;
    }


}
