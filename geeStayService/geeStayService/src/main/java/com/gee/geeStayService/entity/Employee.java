package com.gee.geeStayService.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Employee")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long employeeHrId;

    private String firstName;
    private String lastName;
    private String email;
    private Long phoneNumber;
    @Temporal(TemporalType.DATE)
    private Date hireDate;
    private Long managerHrId;
    private String departmentName;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employee")
    private List<Feedback> feedbackList;
}
