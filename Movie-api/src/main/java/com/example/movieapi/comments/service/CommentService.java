package com.example.movieapi.comments.service;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.account_users.repository.IAccountUserRepository;
import com.example.movieapi.comments.model.ICommentsDto;
import com.example.movieapi.comments.repository.ICommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class CommentService implements ICommentService{
    @Autowired
    private ICommentsRepository commentsRepository;
    @Autowired
    private IAccountUserRepository accountUserRepository;
    @Override
    public List<ICommentsDto> getAllComment(Integer id) {
        return commentsRepository.getAllComment(id);
    }

    @Override
    public void createComment(String username, Integer idMovie, String comment) {
        LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formattedDate = currentDate.format(formatter);
        AccountUser accountUser = accountUserRepository.getAccountByUserName(username);
        commentsRepository.createComment(comment,formattedDate,accountUser.getId(),idMovie);
    }
}
