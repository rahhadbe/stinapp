package com.gee.geeStayService.controller;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.entity.Feedback;
import com.gee.geeStayService.service.GeeStayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class GeeStayController {

    @Autowired
    private GeeStayService geeStayService;

    @PostMapping("/employee")
    public ResponseEntity initiate(@RequestBody Employee employee){
        geeStayService.initiate(employee);
        return null;
    }

    @GetMapping(value = "/feedback/{id}")
    public Feedback getFeedback(@PathVariable("id") Long id) {
        return geeStayService.getFeedback(id);
    }

    @GetMapping(value = "/feedbacks")
    public List<Feedback> getAllFeedbacks() {
        return geeStayService.getAllFeedbacks();
    }

    @PostMapping(value = "/feedback")
    public void postResponse(@RequestBody Feedback feedbackResponse) {
        geeStayService.save(feedbackResponse);
    }
}

