
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
@RequestMapping("/performer")
public class PerformerController {

    public static final String topicExchangeName = "spring-boot-exchange";

    private PerformerService performerService;

    private PerformerRepository performerRepository;

    @ApiOperation(value = "Get All Performers", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @GetMapping("/all")
    List<Performer> all() {
        return performerService.findAll();
    }


    @PostMapping()
    public String create(@RequestBody PerformerRequest performerRequest) {
        return performerService.create(performerRequest);
    }
    @PutMapping("/{id}")
    String update(@PathVariable Long id, @RequestBody PerformerRequest performer) {
        return performerService.update(id, performer);
    }

    @DeleteMapping("/{id}")
    public  String deletePerformer(@PathVariable Long id) {
        return performerService.deletePerformer(id);
    }

    @GetMapping("/{id}")
    Performer findPerformerById(@PathVariable Long id) {
        return performerService.findPerformerById(id);
    }








}
