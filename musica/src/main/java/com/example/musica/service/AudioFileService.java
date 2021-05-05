package com.example.musica.service;


import com.example.musica.dto.*;
import com.example.musica.models.*;
import com.example.musica.repository.*;
import com.example.musica.validation.*;

import org.hibernate.exception.*;
import org.springframework.beans.*;
import org.springframework.beans.factory.annotation.*;

import org.springframework.stereotype.*;

import java.util.*;


@Service
public class AudioFileService {
    @Autowired
    AudioFileRepository korisnikRepository;
@Autowired
    RequestValidation requestValidation;


    public String create(final AudioFileRequest AudioFileRequest) throws ConstraintViolationException {
        //requestValidation.validateCreateRequest(korisnikRequest);
        AudioFileEntity AudioFileEntity =new AudioFileEntity();
        BeanUtils.copyProperties(AudioFileRequest, AudioFileEntity);
      
        korisnikRepository.save(AudioFileEntity);
        return "Audio File successfully created";
    }
    public List<AudioFile> findAll(){
        List<AudioFileEntity> korisnici=korisnikRepository.findAll();
        List<AudioFile> responses=new ArrayList<AudioFile>();
        for(AudioFileEntity AudioFileEntity :korisnici) {
            AudioFile AudioFile = new AudioFile();

            BeanUtils.copyProperties(AudioFileEntity, AudioFile);
            responses.add(AudioFile);
        }
        return responses;
    }
    public AudioFile findById(Long id){
        requestValidation.validateId(id);
        AudioFileEntity AudioFileEntity =korisnikRepository.findById(id).get();
        AudioFile AudioFile =new AudioFile();
        BeanUtils.copyProperties(AudioFileEntity, AudioFile);
        return AudioFile;
    }
    public String updateKorisnik( AudioFile AudioFileRequest){
        requestValidation.validateId(AudioFileRequest.getId());
        AudioFileEntity AudioFileEntity =korisnikRepository.findById(AudioFileRequest.getId()).get();
        BeanUtils.copyProperties(AudioFileRequest, AudioFileEntity);
        korisnikRepository.save(AudioFileEntity);
        return "Updated successfully";
    }
    public String deleteById(Long id){
        requestValidation.validateId(id);
        korisnikRepository.deleteById(id);
        return  "AudioFile is deleted successfully";
    }





}
