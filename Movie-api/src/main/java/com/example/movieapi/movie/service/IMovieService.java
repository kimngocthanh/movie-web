package com.example.movieapi.movie.service;

import com.example.movieapi.movie.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMovieService {
    Page<Movie> getAllMovie(Pageable pageable);
    Movie getMovieById(Integer id);
    Page<Movie> getMovieList(Integer id,Pageable pageable);
    Page<Movie> getMovieByNameAndType(String name, Pageable pageable,String id);
    Page<Movie> getMovieByPerformer(String name, Pageable pageable,String id);
    Page<Movie> getMovieByType(String id, Pageable pageable);
    Page<Movie> getMovieByCountry(String country, Pageable pageable,String id);
    Page<Movie> getMovieByDate(String date, Pageable pageable,String id);

    Page<Movie> getMovieByName(String name, Pageable pageable1);
}
