
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
@RequestMapping("/playlist")
public class PlaylistController {

    public static final String topicExchangeName = "spring-boot-exchange";

    private PlaylistService playlistService;

    private PlaylistRepository playlistRepository;

    @ApiOperation(value = "Get All Playlists", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<Playlist> all() {
        return playlistService.findAll();
    }


    @PostMapping()
    public String create(@RequestBody PlaylistRequest playlistRequest) {
        return playlistService.create(playlistRequest);
    }
    @PutMapping("/{id}")
    String update(@PathVariable Long id, @RequestBody PlaylistRequest playlist) {
        return playlistService.update(id, playlist);
    }

    @DeleteMapping("/{id}")
    public  String deleteplaylist(@PathVariable Long id) {
        return playlistService.deletePlaylist(id);
    }

    @GetMapping("/{id}")
    Playlist findplaylistById(@PathVariable Long id) {
        return playlistService.findPlaylistById(id);
    }








}
