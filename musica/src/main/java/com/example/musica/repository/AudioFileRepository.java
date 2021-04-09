package com.example.musica.repository;

import com.example.musica.models.*;
import com.example.musica.models.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface AudioFileRepository extends JpaRepository<AudioFileEntity, Long> {




}