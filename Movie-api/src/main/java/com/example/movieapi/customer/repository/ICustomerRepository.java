package com.example.movieapi.customer.repository;

import com.example.movieapi.customer.model.Customer;
import com.example.movieapi.customer.model.ICustomerDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    @Query(value = "select c.id as id, c.dob, c.name, c.phone, c.address, c.email from customer c " +
            "join account_user au on c.id_account = au.id " +
            "where au.id = :id ", nativeQuery = true)
    ICustomerDto getCustomerByIdAccount(Integer id);

    @Transactional
    @Modifying
    @Query(value = "insert into customer(dob,name,phone,address,email,id_account) " +
            "values(:dob,:name,:phone,:address,:email,:idAccount) " , nativeQuery = true)
    void createCustomer(String dob,String name,String phone,String address,String email,Integer idAccount);

    @Transactional
    @Modifying
    @Query(value = "update customer c set c.name = :name, c.dob = :dob, c.phone = :phone, c.address = :address, c.email = :email where c.id = :id" , nativeQuery = true)
    void updateCustomer(String dob,String name,String phone,String address,String email, Integer id);
}
