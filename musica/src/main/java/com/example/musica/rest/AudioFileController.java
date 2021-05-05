package com.example.musica.rest;


import com.example.musica.dto.*;
import com.example.musica.repository.*;
import com.example.musica.service.*;
import io.swagger.annotations.*;
import lombok.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;


@AllArgsConstructor
@RestController
@RequestMapping("/audiofile")
public class AudioFileController {


    private com.example.musica.service.AudioFileService AudioFileService;

    private com.example.musica.repository.AudioFileRepository AudioFileRepository;



    @ApiOperation(value = "Create AudioFile", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping()
    public String create(@Valid @RequestBody AudioFileRequest korisnik) {
        return AudioFileService.create(korisnik);
    }

    @ApiOperation(value = "Get All AudioFiles", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<AudioFile> all() {
        return AudioFileService.findAll();
    }

    @ApiOperation(value = "Get AudioFile By Id", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/{id}")
    AudioFile findById(@PathVariable Long id) {
        return AudioFileService.findById(id);
    }

    @ApiOperation(value = "Update AudioFile By Id", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @PutMapping()
    String update(@Valid  @RequestBody AudioFile AudioFile) {
        return AudioFileService.updateKorisnik(AudioFile);}


    @ApiOperation(value = "Delete AudioFile By Id", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @DeleteMapping("/{id}")
    String deleteKorisnik(@PathVariable Long id) {
        return AudioFileService.deleteById(id);
    }










}
