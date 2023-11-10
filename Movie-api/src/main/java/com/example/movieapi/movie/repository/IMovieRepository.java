package com.example.movieapi.movie.repository;

import com.example.movieapi.movie.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMovieRepository extends JpaRepository<Movie,Integer> {
    @Query(value = "select * from movie m where m.id_type = :id ",nativeQuery = true)
    Page<Movie> getMovieByTypeMovie(Integer id, Pageable pageable);
}
