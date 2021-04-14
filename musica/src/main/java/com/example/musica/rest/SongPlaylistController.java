
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
@RequestMapping("/song-playlist")
public class SongPlaylistController {


    private SongPlaylistService songPlaylistService;

    private SongPlaylistRepository songPlaylistRepository;

    @ApiOperation(value = "Get All SongPlaylists", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<SongPlaylist> all() {
        return songPlaylistService.findAll();
    }


    @PostMapping()
    public String create(@RequestBody SongPlaylistRequest songPlaylistRequest) {
        return songPlaylistService.create(songPlaylistRequest);
    }
    @PutMapping("/{id}")
    String update(@PathVariable Long id, @RequestBody SongPlaylistRequest songPlaylist) {
        return songPlaylistService.update(id, songPlaylist);
    }

    @DeleteMapping("/{id}")
    public  String deleteSongPlaylist(@PathVariable Long id) {
        return songPlaylistService.deleteSongPlaylist(id);
    }

    @GetMapping("/{id}")
    SongPlaylist findSongPlaylistById(@PathVariable Long id) {
        return songPlaylistService.findSongPlaylistById(id);
    }








}
