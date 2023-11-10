package com.example.movieapi.account_users.repository;


import com.example.movieapi.account_users.model.AccountUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;


public interface IAccountUserRepository extends JpaRepository<AccountUser,Integer> {

    @Query(value = "select * from account_user a where a.user_name like :userName ",nativeQuery = true)
    AccountUser getAccountByUserName(@Param("userName") String userName);

    @Transactional
    @Modifying
    @Query(value = "call insert_acc ( :password, :userName, :role_id) ", nativeQuery = true)
    void createAccount(@Param("password")String password,@Param("userName")String userName,@Param("role_id") Integer role_id);


}
