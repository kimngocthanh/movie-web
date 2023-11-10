package com.example.movieapi.orders.model;

import com.example.movieapi.cart_detail.model.CartDetailDto;

import java.util.List;

public class OrderDetailDto {
    List<CartDetailDto> cartDetailDtoList;

    public OrderDetailDto() {
    }

    public OrderDetailDto(List<CartDetailDto> cartDetailDtoList) {
        this.cartDetailDtoList = cartDetailDtoList;
    }

    public List<CartDetailDto> getCartDetailDtoList() {
        return cartDetailDtoList;
    }

    public void setCartDetailDtoList(List<CartDetailDto> cartDetailDtoList) {
        this.cartDetailDtoList = cartDetailDtoList;
    }
}
