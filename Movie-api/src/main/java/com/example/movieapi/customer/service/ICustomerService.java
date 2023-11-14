package com.example.movieapi.customer.service;

import com.example.movieapi.customer.model.CustomerDto;
import com.example.movieapi.customer.model.ICustomerDto;

public interface ICustomerService {
    ICustomerDto getCustomerByIdAccount(String username);
    void createCustomer(CustomerDto customerDto,String username);
    void updateCustomer(CustomerDto customerDto);
}
