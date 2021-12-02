package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Feedback")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Feedback {
    @Id
    @GeneratedValue
    private Long feedbackId;

    private Long managerHrId;
    @Temporal(TemporalType.DATE)
    private Date captureDate;

    @ManyToOne
    @JoinColumn(name="employeeHrId")
    private Employee employee;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feedback")
    private List<FeedbackDet> feedbackDetList;
}
