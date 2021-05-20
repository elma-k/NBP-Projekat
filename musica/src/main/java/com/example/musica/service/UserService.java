package com.example.musica.service;

import com.example.musica.dto.*;
import com.example.musica.models.*;
import com.example.musica.repository.*;
import com.example.musica.rest.*;
import com.example.musica.validation.*;
import org.hibernate.exception.*;
import org.springframework.beans.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.password.*;
import org.springframework.stereotype.*;

import java.util.*;


@Service
public class UserService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    UserRepository korisnikRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String create(final UserRequest userRequest) throws ConstraintViolationException {
        //requestValidation.validateCreateRequest(korisnikRequest);
        UserEntity userEntity =new UserEntity();
        BeanUtils.copyProperties(userRequest, userEntity);
        userEntity.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        userEntity.setProvider(AuthProvider.local);
        korisnikRepository.save(userEntity);
        return "User successfully created";
    }
    public List<User> findAll(){
        List<UserEntity> korisnici=korisnikRepository.findAll();
        List<User> responses=new ArrayList<User>();
        for(UserEntity userEntity :korisnici) {
            User user = new User();

            BeanUtils.copyProperties(userEntity, user);
            responses.add(user);
        }
        return responses;
    }
    public User findById(Long id){
        requestValidation.validateId(id);
        UserEntity userEntity =korisnikRepository.findById(id).get();
        User user =new User();
        BeanUtils.copyProperties(userEntity, user);
        return user;
    }
public String updateKorisnik( User userRequest){
        requestValidation.validateId(userRequest.getId());
        UserEntity userEntity =korisnikRepository.findById(userRequest.getId()).get();
        BeanUtils.copyProperties(userRequest, userEntity);
        korisnikRepository.save(userEntity);
        return "Updated successfully";
}
public String deleteById(Long id){
        requestValidation.validateId(id);
        korisnikRepository.deleteById(id);
        return  "User is deleted successfully";
}



}
