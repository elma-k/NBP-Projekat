package com.example.musica.validation;

import com.example.musica.dto.*;
import com.example.musica.exception.*;
import com.example.musica.repository.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@AllArgsConstructor
@Component
public class RequestValidation {
    @Autowired
    SongRepository songRepository;

    @Autowired
    AlbumRepository albumRepository;
    @Autowired
    SongPlaylistRepository songPlaylistRepository;
    @Autowired
    PlaylistRepository playlistRepository;
    @Autowired
    GenreRepository genreRepository;
    @Autowired
    PerformerRepository performerRepository;

    public String validateSongId(Long id){
        if(songRepository.existsById(id))
            return null;
        else
            return "Song with id"+id+" does not exist!";
    }

    public String validatePerformerId(Long id){
        if(performerRepository.existsById(id))
            return null;
        else
            return "Performer with id"+id+" does not exist!";
    }

    public String validateGenreId(Long id){
        if(genreRepository.existsById(id))
            return null;
        else
            return "Genre with id"+id+" does not exist!";
    }

    public String validatePlaylistId(Long id){
        if(playlistRepository.existsById(id))
            return null;
        else
            return "Playlist with id"+id+" does not exist!";
    }

    public String validateSongPlaylistId(Long id){
        if(songPlaylistRepository.existsById(id))
            return null;
        else
            return "Song Playlist with id"+id+" does not exist!";
    }

    public String validateAlbumId(Long id){
        if(albumRepository.existsById(id))
            return null;
        else
            return "Album with id"+id+" does not exist!";
    }


}
