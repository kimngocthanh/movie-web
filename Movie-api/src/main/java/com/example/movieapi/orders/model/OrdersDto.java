package com.example.movieapi.orders.model;

import com.example.movieapi.cart_detail.model.ICartDetailDto;

import java.util.List;

public class OrdersDto {
    List<ICartDetailDto> cartDetailDtoList;

    public OrdersDto() {
    }

    public OrdersDto(List<ICartDetailDto> cartDetailDtoList) {
        this.cartDetailDtoList = cartDetailDtoList;
    }

    public List<ICartDetailDto> getCartDetailDtoList() {
        return cartDetailDtoList;
    }

    public void setCartDetailDtoList(List<ICartDetailDto> cartDetailDtoList) {
        this.cartDetailDtoList = cartDetailDtoList;
    }
}
