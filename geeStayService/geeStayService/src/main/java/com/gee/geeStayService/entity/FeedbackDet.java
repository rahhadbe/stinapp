package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="Feedbackdet")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Deprecated
public class FeedbackDet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackdetid;
    private Long questionid;
    private String response;
    private String sentimentscore;

    @ManyToOne
    @JoinColumn(name="feedbackid")
    private Feedback feedback;
}
