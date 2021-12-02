package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Feedback {
    @Id
    @GeneratedValue
    private Long feedbackId;

    private Long managerId;
    @Temporal(TemporalType.DATE)
    private Date captureDate;

    @ManyToOne
    @JoinColumn(name="employeeId")
    private Employee employee;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feedbackId")
    private List<FeedbackDet> feedbackDetList;
}
