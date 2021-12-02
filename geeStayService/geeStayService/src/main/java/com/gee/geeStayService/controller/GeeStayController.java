package com.gee.geeStayService.controller;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.service.GeeStayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/geestay")
public class GeeStayController {

    @Autowired
    private GeeStayService geeStayService;

    @PostMapping("/addemployee")
    public ResponseEntity add(@RequestBody Employee employee){
        geeStayService.add(employee);
        return  new ResponseEntity<>( HttpStatus.OK); ;
    }

    @GetMapping("/getinitiationdet")
    public ResponseEntity initiate(@RequestBody String email){
        geeStayService.initiate(email);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/getfeedback")
    public ResponseEntity initiate(@RequestBody Employee employee){
        geeStayService.initiate(employee);
        return null;
    }

    @GetMapping("/hello")


  public String hello() {

    return "hello world!";

  }


}