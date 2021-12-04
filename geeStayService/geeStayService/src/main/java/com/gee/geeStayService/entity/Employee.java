package com.gee.geeStayService.entity;

import lombok.*;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;
import java.util.List;
import java.io.*;

@Entity(name = "employee")
@NoArgsConstructor
@AllArgsConstructor
@Data
@CrossOrigin
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeehrid;
    private String firstname;
    private String lastname;
    private String email;
    private Long phonenumber;
    @Temporal(TemporalType.DATE)
    private Date hiredate;
    private String manageremail;
    private String departmentname;

}
