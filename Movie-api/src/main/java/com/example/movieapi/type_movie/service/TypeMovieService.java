package com.example.movieapi.type_movie.service;

import com.example.movieapi.type_movie.model.TypeMovie;
import com.example.movieapi.type_movie.repository.ITypeMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeMovieService implements ITypeMovieService{
    @Autowired
    private ITypeMovieRepository movieRepository;
    @Override
    public List<TypeMovie> getMovieType() {
        return movieRepository.findAll();
    }
}
