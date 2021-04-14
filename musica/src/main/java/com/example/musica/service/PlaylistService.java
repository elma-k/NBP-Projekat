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
public class PlaylistService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    PlaylistRepository PlaylistRepository;



    public List<Playlist> findAll(){
        List<PlaylistEntity> Playlists=PlaylistRepository.findAll();
        List<Playlist> responses=new ArrayList<Playlist>();
        for(PlaylistEntity PlaylistEntity :Playlists) {
            Playlist Playlist = new Playlist();

            BeanUtils.copyProperties(PlaylistEntity, Playlist);
            responses.add(Playlist);
        }
        return responses;
    }

    public String create( PlaylistRequest PlaylistRequest) {

        PlaylistEntity sobaEntity = new PlaylistEntity();
        BeanUtils.copyProperties(PlaylistRequest, sobaEntity);
        PlaylistRepository.save(sobaEntity);
        return "Successfully created!";
    }


    public String update(@PathVariable Long id, @RequestBody PlaylistRequest Playlist) {
        Optional<PlaylistEntity> PlaylistEntity = PlaylistRepository.findById(id);

        if (PlaylistEntity == null) {
            return "Playlist with id"+id+" does not exist!";
        } else {
            PlaylistEntity PlaylistEntity1=PlaylistEntity.get();

            BeanUtils.copyProperties(Playlist ,PlaylistEntity1);
            PlaylistRepository.save(PlaylistEntity1);
            return "Updated successfully!";
        }

    }

    public String deletePlaylist(@PathVariable Long id) {
         if(requestValidation.validatePlaylistId(id) != null)
         return requestValidation.validatePlaylistId(id);
        PlaylistRepository.deleteById(id);
        return "Playlist is deleted successfully";
    }

   public Playlist findPlaylistById(@PathVariable Long id) {
        PlaylistEntity PlaylistEntity= PlaylistRepository.findById(id).get();
        Playlist Playlist=new Playlist();
        BeanUtils.copyProperties(PlaylistEntity,Playlist);
        return Playlist;
    }


}
