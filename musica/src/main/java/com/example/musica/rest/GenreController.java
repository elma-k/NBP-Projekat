
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
@RequestMapping("/genre")
public class GenreController {

    public static final String topicExchangeName = "spring-boot-exchange";

    private GenreService genreService;

    private GenreRepository genreRepository;

    @ApiOperation(value = "Get All Genres", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<Genre> all() {
        return genreService.findAll();
    }


    @PostMapping()
    public String create(@RequestBody GenreRequest genreRequest) {
        return genreService.create(genreRequest);
    }
    @PutMapping("/{id}")
    String update(@PathVariable Long id, @RequestBody GenreRequest genre) {
        return genreService.update(id, genre);
    }

    @DeleteMapping("/{id}")
    public  String deleteGenre(@PathVariable Long id) {
        return genreService.deleteGenre(id);
    }

    @GetMapping("/{id}")
    Genre findGenreById(@PathVariable Long id) {
        return genreService.findGenreById(id);
    }








}
