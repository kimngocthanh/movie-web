package com.example.movieapi.customer.controller;

import com.example.movieapi.customer.model.CustomerDto;
import com.example.movieapi.customer.model.ICustomerDto;
import com.example.movieapi.customer.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping("/customer")
    public ResponseEntity<?> getCustomerByAccount(@RequestParam String username){
        ICustomerDto customerDto = customerService.getCustomerByIdAccount(username);
        return new ResponseEntity<>(customerDto, HttpStatus.OK);
    }

    @PostMapping("/create-customer")
    public ResponseEntity<?> createCustomer(@RequestBody CustomerDto customerDto, @RequestParam String username){
        if(customerDto.getId() == null) {
            customerService.createCustomer(customerDto, username);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        else {
            customerService.updateCustomer(customerDto);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
}
