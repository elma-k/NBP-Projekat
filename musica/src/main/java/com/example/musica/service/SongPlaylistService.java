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
public class SongPlaylistService {

    @Autowired
    RequestValidation requestValidation;

    @Autowired
    SongPlaylistRepository SongPlaylistRepository;


    @GetMapping("/all")
    public List<SongPlaylist> findAll(){
        List<SongPlaylistEntity> SongPlaylists=SongPlaylistRepository.findAll();
        List<SongPlaylist> responses=new ArrayList<SongPlaylist>();
        for(SongPlaylistEntity userEntity :SongPlaylists) {
            SongPlaylist SongPlaylist = new SongPlaylist();

            BeanUtils.copyProperties(userEntity, SongPlaylist);
            responses.add(SongPlaylist);
        }
        return responses;
    }
    @PostMapping()
    public String create(@RequestBody SongPlaylistRequest SongPlaylistRequest) {

        SongPlaylistEntity sobaEntity = new SongPlaylistEntity();
        BeanUtils.copyProperties(SongPlaylistRequest, sobaEntity);
        SongPlaylistRepository.save(sobaEntity);
        return "Successfully created!";
    }

    @PutMapping("/{id}")
    public String update(@PathVariable Long id, @RequestBody SongPlaylistRequest SongPlaylist) {
        Optional<SongPlaylistEntity> SongPlaylistEntity = SongPlaylistRepository.findById(id);

        if (SongPlaylistEntity == null) {
            return "SongPlaylist with id"+id+" does not exist!";
        } else {
            SongPlaylistEntity SongPlaylistEntity1=SongPlaylistEntity.get();

            BeanUtils.copyProperties(SongPlaylist ,SongPlaylistEntity1);
            SongPlaylistRepository.save(SongPlaylistEntity1);
            return "Updated successfully!";
        }

    }
    @DeleteMapping("/{id}")
   public String deleteSongPlaylist(@PathVariable Long id) {
        if(requestValidation.validateSongPlaylistId(id) != null)
            return requestValidation.validateSongPlaylistId(id);

        SongPlaylistRepository.deleteById(id);
        return "SongPlaylist is deleted successfully";
    }
    @GetMapping("/{id}")
    public SongPlaylist findSongPlaylistById(@PathVariable Long id) {
        SongPlaylistEntity SongPlaylistEntity= SongPlaylistRepository.findById(id).get();
        SongPlaylist SongPlaylist=new SongPlaylist();
        BeanUtils.copyProperties(SongPlaylistEntity,SongPlaylist);
        return SongPlaylist;
    }


}