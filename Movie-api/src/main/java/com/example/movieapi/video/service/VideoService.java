package com.example.movieapi.video.service;

import com.example.movieapi.video.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService implements IVideoService{
    @Autowired
    private VideoRepository videoRepository;
    @Override
    public List<String> getAllVideo(Integer id) {
        return videoRepository.getAllUrl(id);
    }
}
