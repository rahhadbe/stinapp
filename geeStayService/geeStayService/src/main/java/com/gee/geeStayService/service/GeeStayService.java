package com.gee.geeStayService.service;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.entity.Feedback;
import com.gee.geeStayService.repo.EmployeeRepo;
import com.gee.geeStayService.repo.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeeStayService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private FeedbackRepo feedbackRepo;

    public void initiate(Employee employee){
        employeeRepo.save(employee);
    }

    public Feedback getFeedback(Long id) {
        return feedbackRepo.getByFeedbackid(id);
    }

    public void save(Feedback feedbackResponse) {
        feedbackRepo.save(feedbackResponse);
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }
}
