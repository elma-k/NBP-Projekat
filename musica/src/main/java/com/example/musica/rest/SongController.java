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
@RequestMapping("/song")
public class SongController {

    public static final String topicExchangeName = "spring-boot-exchange";

    private SongService songService;

    private SongRepository songRepository;

    @ApiOperation(value = "Get All Songs", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<Song> all() {
        return songService.findAll();
    }


    @PostMapping()
    public String create(@RequestBody SongRequest songRequest) {
        return songService.create(songRequest);
    }
    @PutMapping("/{id}")
    String update(@PathVariable Long id, @RequestBody SongRequest song) {
        return songService.update(id, song);
    }

    @DeleteMapping("/{id}")
    public  String deleteSong(@PathVariable Long id) {
        return songService.deleteSong(id);
    }

    @GetMapping("/{id}")
    Song findSongById(@PathVariable Long id) {
        return songService.findSongById(id);
    }








}
