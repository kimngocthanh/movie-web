package com.example.movieapi.movie.service;

import com.example.movieapi.movie.model.Movie;
import com.example.movieapi.movie.repository.IMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService implements IMovieService{
    @Autowired
    private IMovieRepository movieRepository;
    @Override
    public Page<Movie> getAllMovie(Pageable pageable) {
        return movieRepository.findAll(pageable);
    }

    @Override
    public Movie getMovieById(Integer id) {
        return movieRepository.findById(id).get();
    }

    @Override
    public Page<Movie> getMovieList(Integer id,Pageable pageable) {
        Movie movie = movieRepository.findById(id).get();
        return movieRepository.getMovieByTypeMovie(movie.getTypeMovie().getId(),pageable);
    }
}
