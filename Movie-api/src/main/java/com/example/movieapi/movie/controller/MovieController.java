package com.example.movieapi.movie.controller;

import com.example.movieapi.movie.model.Movie;
import com.example.movieapi.movie.service.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MovieController {
    @Autowired
    private IMovieService movieService;
    @GetMapping("/movie")
    public ResponseEntity<Page<Movie>> findAllMovie(@RequestParam(defaultValue = "0", required = false) int page,
                                          @RequestParam(defaultValue = "10", required = false) int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Movie> moviePage = movieService.getAllMovie(pageable);
        return new ResponseEntity<>(moviePage, HttpStatus.OK);
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<?> findMovieById(@PathVariable Integer id) {
        Movie movie = movieService.getMovieById(id);
        return new ResponseEntity<>(movie,HttpStatus.OK);
    }

    @GetMapping("/movie-by-type")
    public ResponseEntity<?> findMovieByTypeMovie(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size ,@RequestParam Integer id) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Movie> movieList = movieService.getMovieList(id,pageable);
        return new ResponseEntity<>(movieList,HttpStatus.OK);
    }
}
