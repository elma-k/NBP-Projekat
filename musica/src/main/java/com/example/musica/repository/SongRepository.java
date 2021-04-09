package com.example.musica.repository;

import com.example.musica.models.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

@Repository
public interface SongRepository extends JpaRepository<SongEntity, Long> {




}