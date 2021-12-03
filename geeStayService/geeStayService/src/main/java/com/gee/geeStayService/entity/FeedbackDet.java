package com.gee.geeStayService.entity;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.*;

@Entity
@Table(name="Feedbackdet")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FeedbackDet implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackdetid;
    private Long questionid;
    private String questioncategory;
    private String questioncontent;
    private String response;
    private String sentimentscore;

    @ManyToOne
    @JoinColumn(name="feedbackid")
    @JsonBackReference
    private Feedback feedback;
}
