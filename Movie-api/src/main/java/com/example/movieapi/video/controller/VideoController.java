package com.example.movieapi.video.controller;

import com.example.movieapi.video.service.IVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class VideoController {
    @Autowired
    private IVideoService videoService;
    @GetMapping("/video")
    public ResponseEntity<?> getUrlVideo(@RequestParam Integer id){
        List<String> urlVideo = videoService.getAllVideo(id);
        return new ResponseEntity<>(urlVideo, HttpStatus.OK);
    }

}
