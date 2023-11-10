package com.example.movieapi.orders.service;


import com.example.movieapi.orders.model.OrderDetailDto;

public interface IOrdersService {
    void createOrders(OrderDetailDto orderDetailDto, String username);
}
