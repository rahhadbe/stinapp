package com.gee.geeStayService.controller;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.entity.Feedback;
import com.gee.geeStayService.entity.*;
import com.gee.geeStayService.entity.FeedbackDet;
import com.gee.geeStayService.service.GeeStayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
public class GeeStayController {

    @Autowired
    private GeeStayService geeStayService;

    @PostMapping("/employee")
    public ResponseEntity initiate(@RequestBody Employee employee){
        geeStayService.initiate(employee);
        return null;
    }

    @GetMapping(value = "/employee/{email}")
    public Employee getEmployee(@PathVariable("email") String email) {
        return geeStayService.getEmployee(email);
    }

    @GetMapping(value = "/question")
    public List <Question> getQuestion() {
        return geeStayService.getQuestion();
    }

    @GetMapping(value = "/feedback/{email}")
    public List <Feedback> getFeedback(@PathVariable("email") String email) {
        return geeStayService.getFeedback(email);
    }

    @GetMapping(value = "/feedbackdet/{id}")
    public List <FeedbackDet> getFeedbackDet(@PathVariable("id") Long id) {
        return geeStayService.getFeedbackDet(id);
    }

    @PostMapping(value = "/feedback")
    public void postResponse(@RequestBody HashMap <String, HashMap<String,String>> feedbackResponse) {
        geeStayService.save(feedbackResponse);
    }

    @GetMapping("/helloworld")

    public String hello() {

        return "hello world!";

    }

}

