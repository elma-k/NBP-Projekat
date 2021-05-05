package com.example.musica.validation;


import com.example.musica.dto.*;
import com.example.musica.exception.*;
import com.example.musica.repository.*;
import lombok.*;
import org.springframework.stereotype.*;

@AllArgsConstructor
@Component
public class RequestValidation {
    AudioFileRepository korisnikRepository;

    public void validateId(Long id) {
        if (!korisnikRepository.existsById(id)) {
            throw new EntityNotFoundException(AudioFile.class, "id", id.toString());
        }
    }
}
