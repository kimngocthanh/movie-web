package com.example.movieapi.video.repository;

import com.example.movieapi.video.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video,Integer> {
    @Query(value = "select v.url from movie m " +
            "join video v on m.id = v.id_movie " +
            "where m.id = :id ", nativeQuery = true)
    List<String> getAllUrl(Integer id);
}
