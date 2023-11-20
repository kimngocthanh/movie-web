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
                                          @RequestParam(defaultValue = "20", required = false) int size) {
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

    @GetMapping("/movie-by-name")
    public ResponseEntity<?> findMovieByName(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size ,@RequestParam String name) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Movie> moviePage = movieService.getMovieByName(name,pageable);
        return new ResponseEntity<>(moviePage,HttpStatus.OK);
    }

    @GetMapping("/movie-by-performer")
    public ResponseEntity<?> findMovieByPerformer(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size ,@RequestParam(defaultValue = "",required = false) String name) {
        Pageable pageable = PageRequest.of(page, size);
        Pageable pageable1 = PageRequest.of(0,10);
        Page<Movie> moviePage;
        if(name == null){
            moviePage = movieService.getAllMovie(pageable);
        }else {
            moviePage = movieService.getMovieByName(name,pageable1);
        }
        return new ResponseEntity<>(moviePage,HttpStatus.OK);
    }

    @GetMapping("/movie/search")
    public ResponseEntity<?> getMovie(@RequestParam(defaultValue = "0" , required = false) int page,
                                      @RequestParam(defaultValue = "20", required = false) int size,
                                      @RequestParam(defaultValue = "", required = false) String searchMovie,
                                      @RequestParam(defaultValue = "", required = false) String search,
                                      @RequestParam(defaultValue = "", required = false) String searchType) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Movie> moviePage;
        switch (searchMovie) {
            case "searchByPerformer":
                moviePage = movieService.getMovieByPerformer(search,pageable, searchType);
                break;
            case "searchByName":
                moviePage = movieService.getMovieByNameAndType(search,pageable,searchType);
                break;
            case "searchByType":
                moviePage = movieService.getMovieByType(search,pageable);
                break;
            case "searchByCountry":
                moviePage = movieService.getMovieByCountry(search,pageable,searchType);
                break;
            case "searchByYear":
                moviePage = movieService.getMovieByDate(search,pageable,searchType);
                break;
            default:
                moviePage = movieService.getAllMovie(pageable);
        }
        return new ResponseEntity<>(moviePage,HttpStatus.OK);

    }
}
