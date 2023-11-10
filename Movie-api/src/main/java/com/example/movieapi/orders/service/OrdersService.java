package com.example.movieapi.orders.service;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.account_users.repository.IAccountUserRepository;
import com.example.movieapi.cart_detail.model.CartDetailDto;
import com.example.movieapi.cart_detail.repository.ICartDetailRepository;
import com.example.movieapi.orders.model.OrderDetailDto;
import com.example.movieapi.orders.repository.IOrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class OrdersService implements IOrdersService{
    @Autowired
    private IOrdersRepository ordersRepository;
    @Autowired
    private ICartDetailRepository cartDetailRepository;
    @Autowired
    private IAccountUserRepository accountUserRepository;
    @Override
    public void createOrders(OrderDetailDto orderDetailDto, String username) {
        LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formattedDate = currentDate.format(formatter);
        AccountUser accountUser = accountUserRepository.getAccountByUserName(username);
        ordersRepository.addOrder(formattedDate,accountUser.getId());
        Integer idOrders = ordersRepository.getIdMaxOrders();
        for (CartDetailDto o: orderDetailDto.getCartDetailDtoList()) {
            cartDetailRepository.deleteCartDetail(o.getId(),accountUser.getId());
            ordersRepository.createOrderDetail(o.getPrice(),o.getId(), idOrders);
        }
    }




}
