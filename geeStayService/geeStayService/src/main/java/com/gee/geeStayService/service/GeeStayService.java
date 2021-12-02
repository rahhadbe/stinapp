package com.gee.geeStayService.service;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeeStayService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public void initiate(Employee employee){
        employeeRepo.save(employee);
    }
}
