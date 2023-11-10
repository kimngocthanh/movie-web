package com.example.movieapi.cart_detail.repository;

import com.example.movieapi.cart_detail.model.CartDetail;
import com.example.movieapi.cart_detail.model.ICartDetailDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ICartDetailRepository extends JpaRepository<CartDetail, Integer> {
    @Query(value = "select m.id, m.name, m.image, m.price from cart_detail cd\n" +
            "join movie m on cd.id_movie = m.id\n" +
            "join account_user au on cd.id_user = au.id\n" +
            "where au.user_name like :username ", nativeQuery = true)
    List<ICartDetailDto> getCartDetailByUsername(String username);

    @Transactional
    @Modifying
    @Query(value = "insert into cart_detail(id_user, id_movie)\n" +
            "values(:user,:movie)",nativeQuery = true)
    void createCartDetail(Integer user, Integer movie);

    @Transactional
    @Modifying
    @Query(value = "delete from cart_detail where cart_detail.id_movie = :idMovie and cart_detail.id_user = :idUser ",nativeQuery = true)
    void deleteCartDetail(Integer idMovie,Integer idUser);
}
