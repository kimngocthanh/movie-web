package com.example.movieapi.type_movie.controller;

import com.example.movieapi.type_movie.model.TypeMovie;
import com.example.movieapi.type_movie.service.ITypeMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TypeMovieController {
    @Autowired
    private ITypeMovieService typeMovieService;

    @GetMapping("/type-movie")
    public ResponseEntity<?> getTypeMovie(){
        List<TypeMovie> movieList = typeMovieService.getMovieType();
        return new ResponseEntity<>(movieList, HttpStatus.OK);
    }
}
