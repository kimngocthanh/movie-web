package com.example.movieapi.orders.service;


import com.example.movieapi.orders.model.IOrdersDto;
import com.example.movieapi.orders.model.OrderDetailDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrdersService {
    void createOrders(OrderDetailDto orderDetailDto, String username);
    Integer checkIdOrdersDetail(String idUser, Integer idMovie);
    Page<IOrdersDto> getOrders(String username, Pageable pageable);
}
