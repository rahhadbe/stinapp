package com.gee.geeStayService.service;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.entity.Feedback;
import com.gee.geeStayService.entity.Question;
import com.gee.geeStayService.repo.QuestionRepo;
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

    @Autowired
    private QuestionRepo questionRepo;

    public void initiate(Employee employee){
        employeeRepo.save(employee);
    }

    public Employee getEmployee(String email) {
        return employeeRepo.getEmployeeByEmail(email);
    }

    public List <Question> getQuestion() {
        return questionRepo.findAll();
    }

    public List <Feedback> getFeedback(String email) {
        return feedbackRepo.getFeedbackByEmail(email);
    }

    public FeedbackDet getFeedbackDet(Long id) {
        return feedbackRepoDet.getFeedbackById(id);
    }

    public void save(Feedback feedbackResponse) {
        feedbackRepo.save(feedbackResponse);
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }
}
