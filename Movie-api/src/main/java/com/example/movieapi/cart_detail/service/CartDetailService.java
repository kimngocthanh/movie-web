package com.example.movieapi.cart_detail.service;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.account_users.repository.IAccountUserRepository;
import com.example.movieapi.cart_detail.model.ICartDetailDto;
import com.example.movieapi.cart_detail.repository.ICartDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDetailService implements ICartDetailService{
    @Autowired
    private ICartDetailRepository cartDetailRepository;
    @Autowired
    private IAccountUserRepository accountUserRepository;

    @Override
    public List<ICartDetailDto> getAllCartDetail(String username) {
        return cartDetailRepository.getCartDetailByUsername(username);
    }

    @Override
    public void createCartDetail(String user, Integer movie) {
        AccountUser accountUser = accountUserRepository.getAccountByUserName(user);
        cartDetailRepository.createCartDetail(accountUser.getId(),movie);
    }

    @Override
    public void deleteCartDetail(Integer id,String username) {
        AccountUser accountUser = accountUserRepository.getAccountByUserName(username);
        cartDetailRepository.deleteCartDetail(id,accountUser.getId());
    }
}
