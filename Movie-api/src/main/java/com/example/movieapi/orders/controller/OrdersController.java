package com.example.movieapi.orders.controller;

import com.example.movieapi.cart_detail.model.CartDetailDto;
import com.example.movieapi.cart_detail.model.ICartDetailDto;
import com.example.movieapi.movie.model.IMovieDto;
import com.example.movieapi.orders.model.IOrdersDto;
import com.example.movieapi.orders.model.OrderDetailDto;
import com.example.movieapi.orders.model.OrdersDto;
import com.example.movieapi.orders.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class OrdersController {
    @Autowired
    private IOrdersService ordersService;

    @PostMapping("/create-orders")
    public ResponseEntity<?> createOrders(@RequestBody OrderDetailDto ordersDto, @RequestParam String username){
        ordersService.createOrders(ordersDto,username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/orders")
    public ResponseEntity<?> getOrders(@RequestParam(defaultValue = "5") Integer size,
                                       @RequestParam(defaultValue = "0") Integer page,
                                       @RequestParam String username){
        Pageable pageable = PageRequest.of(page,size);
        Page<IOrdersDto> ordersDtoPage = ordersService.getOrders(username,pageable);
        return new ResponseEntity<>(ordersDtoPage,HttpStatus.OK);
    }

    @GetMapping("/check-movie")
    public ResponseEntity<?> checkMovieInOrderDetail(@RequestParam String username, @RequestParam Integer idMovie){
        Integer integer = ordersService.checkMovieInOrder(username, idMovie);
        if(integer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/movie-play")
    public ResponseEntity<?> playMovie(@RequestParam(defaultValue = "20") Integer size,
                                       @RequestParam(defaultValue = "0") Integer page,
                                       @RequestParam String username){
        Pageable pageable = PageRequest.of(page,size);
        Page<IMovieDto> movieDtoPage = ordersService.getMoviePlay(username,pageable);
        return new ResponseEntity<>(movieDtoPage,HttpStatus.OK);
    }

    @GetMapping("/movie-max")
    public ResponseEntity<?> movieMax(){
        List<IMovieDto> movieDto = ordersService.getMovieMax();
        return new ResponseEntity<>(movieDto,HttpStatus.OK);
    }
}
