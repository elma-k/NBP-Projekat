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
public class GenreService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    GenreRepository genreRepository;

    @GetMapping("/all")
    public List<Genre> findAll(){
        List<GenreEntity> Genres=genreRepository.findAll();
        List<Genre> responses=new ArrayList<Genre>();
        for(GenreEntity GenreEntity :Genres) {
            Genre Genre = new Genre();

            BeanUtils.copyProperties(GenreEntity, Genre);
            responses.add(Genre);
        }
        return responses;
    }
    @PostMapping()
    public String create(@RequestBody GenreRequest GenreRequest) {

        GenreEntity sobaEntity = new GenreEntity();
        BeanUtils.copyProperties(GenreRequest, sobaEntity);
        genreRepository.save(sobaEntity);
        return "Successfully created!";
    }

    @PutMapping("/{id}")
   public String update(@PathVariable Long id, @RequestBody GenreRequest Genre) {
        Optional<GenreEntity> GenreEntity = genreRepository.findById(id);

        if (GenreEntity == null) {
            return "Genre with id"+id+" does not exist!";
        } else {
            GenreEntity GenreEntity1=GenreEntity.get();

            BeanUtils.copyProperties(Genre ,GenreEntity1);
            genreRepository.save(GenreEntity1);
            return "Updated successfully!";
        }

    }
    @DeleteMapping("/{id}")
   public String deleteGenre(@PathVariable Long id) {
        if(requestValidation.validateGenreId(id) != null)
            return requestValidation.validateGenreId(id);
        genreRepository.deleteById(id);
        return "Genre is deleted successfully";
    }
    @GetMapping("/{id}")
   public Genre findGenreById(@PathVariable Long id) {
        GenreEntity GenreEntity= genreRepository.findById(id).get();
        Genre Genre=new Genre();
        BeanUtils.copyProperties(GenreEntity,Genre);
        return Genre;
    }


}
