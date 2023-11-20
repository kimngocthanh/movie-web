package com.example.movieapi.movie.repository;

import com.example.movieapi.movie.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface IMovieRepository extends JpaRepository<Movie,Integer> {
    @Query(value = "select * from movie m where m.id_type = :id ",nativeQuery = true)
    Page<Movie> getMovieByTypeMovie(Integer id, Pageable pageable);
    @Query(value = "select * from movie m where m.name like concat('%', :name, '%') " , nativeQuery = true)
    Page<Movie> getMovieByName(String name, Pageable pageable);

    @Query(value = "select * from movie m where m.name like concat('%', :name, '%') and m.id_type like concat('%' , :id , '%')" , nativeQuery = true)
    Page<Movie> getMovieByNameAndType(String name, Pageable pageable,String id);

    @Query(value = "select * from movie m where m.performer like concat('%', :name, '%') and m.id_type like concat('%' , :id , '%') " ,nativeQuery = true)
    Page<Movie> getMovieByPerformer(String name, Pageable pageable,String id);

    @Query(value = "select * from movie m where m.id_type = :id" , nativeQuery = true)
    Page<Movie> getMovieByType(Integer id, Pageable pageable);

    @Query(value = "select * from movie m where m.country like concat('%', :name, '%') and m.id_type like concat('%' , :id , '%') " ,nativeQuery = true)
    Page<Movie> getMovieByCountry(String name, Pageable pageable,String id);

    @Query(value = "select * from movie m where m.date like concat('%', :date, '%') and m.id_type like concat('%' , :id , '%') " ,nativeQuery = true)
    Page<Movie> getMovieByDate(String date, Pageable pageable,String id);
}
