package com.example.musica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.*;
import org.springframework.cloud.openfeign.*;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class MusicaApplication {

    public static void main(String[] args) {
        SpringApplication.run(MusicaApplication.class, args);
    }

}
