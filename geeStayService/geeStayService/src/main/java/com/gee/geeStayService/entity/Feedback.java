package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.io.*;

@Entity(name = "feedback")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Feedback implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackid;

    private String employeeemail;
    private String manageremail;

    @Temporal(TemporalType.DATE)
    private Date capturedate;
    private String aggsentiment_score;

    @OneToMany(mappedBy = "feedback", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List <FeedbackDet> feedbackList;
}
