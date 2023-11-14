package com.example.movieapi.customer.service;

import com.example.movieapi.account_users.model.AccountUser;
import com.example.movieapi.account_users.repository.IAccountUserRepository;
import com.example.movieapi.customer.model.CustomerDto;
import com.example.movieapi.customer.model.ICustomerDto;
import com.example.movieapi.customer.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private IAccountUserRepository accountUserRepository;
    @Override
    public ICustomerDto getCustomerByIdAccount(String username) {
        AccountUser accountUser = accountUserRepository.getAccountByUserName(username);
        return customerRepository.getCustomerByIdAccount(accountUser.getId());
    }

    @Override
    public void createCustomer(CustomerDto customerDto,String username) {
        AccountUser accountUser = accountUserRepository.getAccountByUserName(username);
        customerRepository.createCustomer(customerDto.getDob(),customerDto.getName(),customerDto.getPhone(),customerDto.getAddress(),customerDto.getEmail(),accountUser.getId());
    }

    @Override
    public void updateCustomer(CustomerDto customerDto) {
        customerRepository.updateCustomer(customerDto.getDob(),customerDto.getName(),customerDto.getPhone(),customerDto.getAddress(),customerDto.getEmail(),customerDto.getId());
    }
}
