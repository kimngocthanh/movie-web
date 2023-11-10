package com.example.movieapi.orders.repository;

import com.example.movieapi.orders.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IOrdersRepository extends JpaRepository<Orders, Integer> {
    @Transactional
    @Modifying
    @Query(value = "call create_oders(:price, :idMovie, :idUser, :date)", nativeQuery = true)
    void createOrders(Double price,Integer idMovie, Integer idUser, String date);

    @Transactional
    @Modifying
    @Query(value = "insert into order_detail(is_flag, price,id_movie,id_order) " +
            "values(0,:price,:idMovie,:idOrders) ", nativeQuery = true)
    void createOrderDetail(@Param("price") Double price,@Param("idMovie") Integer idMovie,@Param("idOrders") Integer idOrders);

    @Transactional
    @Modifying
    @Query(value = "insert into orders(datetime,flag_deleted,id_user) " +
            " values(:dateNow,0,:idUser) ",nativeQuery = true)
    void addOrder(String dateNow,Integer idUser);

    @Query(value = "select max(id) from orders " , nativeQuery = true)
    Integer getIdMaxOrders();

}
