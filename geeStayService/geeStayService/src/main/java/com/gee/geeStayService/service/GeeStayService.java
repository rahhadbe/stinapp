package com.gee.geeStayService.service;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeeStayService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public void add(Employee employee){
        employeeRepo.save(employee);
    }
    public void initiate(String email)
    {
        List <Employee> employee = employeeRepo.getEmployeeByEmail(email);
    }
}
