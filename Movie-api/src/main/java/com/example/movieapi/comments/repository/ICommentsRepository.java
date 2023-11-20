package com.example.movieapi.comments.repository;

import com.example.movieapi.comments.model.Comments;
import com.example.movieapi.comments.model.ICommentsDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ICommentsRepository extends JpaRepository<Comments,Integer> {
    @Query(value = "select c.comment_text as commentText, c.date, au.user_name as userName \n" +
            "from comments c \n" +
            "join movie m on c.id_movie = m.id\n" +
            "join account_user au on c.id_user = au.id\n" +
            "where m.id = :idMovie ", nativeQuery = true)
    List<ICommentsDto> getAllComment(Integer idMovie);

    @Transactional
    @Modifying
    @Query(value = "insert into comments(comment_text, date , id_user,id_movie)\n" +
            "values(:comment, :date, :idUser, :idMovie) ", nativeQuery = true)
    void createComment(String comment, String date, Integer idUser, Integer idMovie);
}
