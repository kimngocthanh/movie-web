package com.example.movieapi.orders.repository;

import com.example.movieapi.movie.model.IMovieDto;
import com.example.movieapi.movie.model.Movie;
import com.example.movieapi.orders.model.IOrdersDto;
import com.example.movieapi.orders.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

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

    @Query(value = "select o.id from order_detail od " +
            "join orders o on od.id_order = o.id " +
            "where o.id_user = :idUser and od.id_movie = :idMovie limit 1", nativeQuery = true)
    Integer checkOrderDetail(Integer idUser, Integer idMovie);

    @Query(value = "select o.datetime, sum(price) as total " +
            "from orders o " +
            "join order_detail od on o.id = od.id_order\n" +
            "where o.id_user = :id \n" +
            "group by o.datetime, o.id order by o.id desc ",nativeQuery = true)
    Page<IOrdersDto> getOrders(Integer id, Pageable pageable);

    @Query(value = "select od.id \n" +
            "from order_detail od\n" +
            "join orders o on od.id_order = o.id\n" +
            "join account_user au on o.id_user = au.id\n" +
            "where au.id = :idUser and od.id_movie = :idMovie " , nativeQuery = true)
    Integer checkMovieInOrder(Integer idUser, Integer idMovie);

    @Query(value = "select m.name, m.image, m.id \n" +
            "from order_detail od\n" +
            "join orders o on od.id_order = o.id\n" +
            "join account_user au on o.id_user = au.id\n" +
            "join movie m on od.id_movie = m.id " +
            "where au.id = :idUser" , nativeQuery = true)
    Page<IMovieDto> getMovieList(Integer idUser, Pageable pageable);

    @Query(value = "select m.id, m.name, m.image, count(*) as count\n" +
            "from order_detail od \n" +
            "left join movie m on od.id_movie = m.id\n" +
            "group by m.id,m.name,m.image\n" +
            "order by count desc\n" +
            "limit 5 ",nativeQuery = true)
    List<IMovieDto> getMovieMax();
}
