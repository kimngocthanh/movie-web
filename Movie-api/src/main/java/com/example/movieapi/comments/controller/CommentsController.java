package com.example.movieapi.comments.controller;

import com.example.movieapi.comments.model.CommentDto;
import com.example.movieapi.comments.model.ICommentsDto;
import com.example.movieapi.comments.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CommentsController {
    @Autowired
    private ICommentService commentService;
    @GetMapping("/comment")
    public ResponseEntity<?> getAllComment(@RequestParam Integer idMovie){
        List<ICommentsDto> list = commentService.getAllComment(idMovie);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/create-comment")
    public ResponseEntity<?> createComment(@RequestParam String comment,@RequestParam Integer idMovie,@RequestParam String username) {
        commentService.createComment(username,idMovie,comment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
