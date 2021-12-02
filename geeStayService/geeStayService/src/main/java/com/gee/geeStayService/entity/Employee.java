package com.gee.geeStayService.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Employee {
    @Id
    @GeneratedValue
    private Long employeeId;
    private String firstName;
    private String lastName;
    private String email;
    private Long phoneNumber;
    @Temporal(TemporalType.DATE)
    private Date hireDate;
    private Long mangerId;
    private String departmentName;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "employeeId")
    private List<Feedback> feedbackList;
}
