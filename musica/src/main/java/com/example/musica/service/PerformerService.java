package com.example.musica.service;

import com.example.musica.dto.*;
import com.example.musica.models.*;
import com.example.musica.repository.*;
import com.example.musica.validation.*;
import org.springframework.beans.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@Service
public class PerformerService {

@Autowired
    RequestValidation requestValidation;

    @Autowired
    PerformerRepository PerformerRepository;


    @GetMapping("/all")
    public List<Performer> findAll(){
        List<PerformerEntity> Performers=PerformerRepository.findAll();
        List<Performer> responses=new ArrayList<Performer>();
        for(PerformerEntity PerformerEntity :Performers) {
            Performer Performer = new Performer();

            BeanUtils.copyProperties(PerformerEntity, Performer);
            responses.add(Performer);
        }
        return responses;
    }
    @PostMapping()
    public String create(@RequestBody PerformerRequest PerformerRequest) {

        PerformerEntity sobaEntity = new PerformerEntity();
        BeanUtils.copyProperties(PerformerRequest, sobaEntity);
        PerformerRepository.save(sobaEntity);
        return "Successfully created!";
    }

    @PutMapping("/{id}")
   public String update(@PathVariable Long id, @RequestBody PerformerRequest Performer) {
        Optional<PerformerEntity> PerformerEntity = PerformerRepository.findById(id);

        if (PerformerEntity == null) {
            return "Performer with id"+id+" does not exist!";
        } else {
            PerformerEntity PerformerEntity1=PerformerEntity.get();

            BeanUtils.copyProperties(Performer ,PerformerEntity1);
            PerformerRepository.save(PerformerEntity1);
            return "Updated successfully!";
        }

    }
    @DeleteMapping("/{id}")
   public  String deletePerformer(@PathVariable Long id) {
         if(requestValidation.validatePerformerId(id) != null)
         return requestValidation.validatePerformerId(id);
        PerformerRepository.deleteById(id);
        return "Performer is deleted successfully";
    }
    @GetMapping("/{id}")
   public Performer findPerformerById(@PathVariable Long id) {
        PerformerEntity PerformerEntity= PerformerRepository.findById(id).get();
        Performer Performer=new Performer();
        BeanUtils.copyProperties(PerformerEntity,Performer);
        return Performer;
    }


}
