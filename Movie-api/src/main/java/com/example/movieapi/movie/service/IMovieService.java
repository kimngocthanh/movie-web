package com.example.movieapi.movie.service;

import com.example.movieapi.movie.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMovieService {
    Page<Movie> getAllMovie(Pageable pageable);
    Movie getMovieById(Integer id);
    Page<Movie> getMovieList(Integer id,Pageable pageable);
}
