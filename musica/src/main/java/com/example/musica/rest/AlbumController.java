
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
@RequestMapping("/album")
public class AlbumController {

    public static final String topicExchangeName = "spring-boot-exchange";

    private AlbumService albumService;

    private AlbumRepository albumRepository;

    @ApiOperation(value = "Get All Albums", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<Album> all() {
        return albumService.findAll();
    }


    @PostMapping()
    public String create(@RequestBody AlbumRequest albumRequest) {
        return albumService.create(albumRequest);
    }
    @PutMapping("/{id}")
    String update(@PathVariable Long id, @RequestBody AlbumRequest album) {
        return albumService.update(id, album);
    }

    @DeleteMapping("/{id}")
    public  String deleteAlbum(@PathVariable Long id) {
        return albumService.deleteAlbum(id);
    }

    @GetMapping("/{id}")
    Album findAlbumById(@PathVariable Long id) {
        return albumService.findAlbumById(id);
    }








}
