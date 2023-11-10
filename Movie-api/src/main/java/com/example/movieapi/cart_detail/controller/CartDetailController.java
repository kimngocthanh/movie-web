package com.example.movieapi.cart_detail.controller;

import com.example.movieapi.cart_detail.model.ICartDetailDto;
import com.example.movieapi.cart_detail.service.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CartDetailController {
    @Autowired
    private ICartDetailService cartDetailService;

    @GetMapping("/cart-detail")
    public ResponseEntity<?> getCartDetail(@RequestParam String username) {
        List<ICartDetailDto> cartDetailDtoList = cartDetailService.getAllCartDetail(username);
        return new ResponseEntity<>(cartDetailDtoList, HttpStatus.OK);
    }

    @PostMapping("/create-cart-detail")
    public  ResponseEntity<?> createCartDetail(@RequestParam String username, @RequestParam Integer idMovie){
        cartDetailService.createCartDetail(username,idMovie);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete-cart-detail")
    public ResponseEntity<?> deleteCartDetail(@RequestParam Integer id,@RequestParam String username) {
        cartDetailService.deleteCartDetail(id,username);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
