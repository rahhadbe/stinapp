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

    @Temporal(TemporalType.DATE)
    private Date capturetime;

    private Long employeehrid;
    //    private Long managerhrid;
    private Long questionid;
    //    private String aggsentiment_score;
    private String response;

}
