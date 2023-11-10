package com.example.movieapi.type_movie.repository;

import com.example.movieapi.type_movie.model.TypeMovie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeMovieRepository extends JpaRepository<TypeMovie,Integer> {
}
