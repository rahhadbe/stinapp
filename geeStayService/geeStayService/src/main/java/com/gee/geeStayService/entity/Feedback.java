package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity(name = "feedback")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackid;

    private String employeeemail;
    private String manageremail;

    @Temporal(TemporalType.DATE)
    private Date capturedate;
    private String aggsentiment_score;
}
