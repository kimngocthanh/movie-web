package com.example.movieapi.cart_detail.service;

import com.example.movieapi.cart_detail.model.ICartDetailDto;

import java.util.List;

public interface ICartDetailService {
    List<ICartDetailDto> getAllCartDetail(String username);

    void createCartDetail(String user,Integer movie);
    void deleteCartDetail(Integer id,String username);
}
