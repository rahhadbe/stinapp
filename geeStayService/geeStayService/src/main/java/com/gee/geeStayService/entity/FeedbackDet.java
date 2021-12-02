package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FeedbackDet {
    @Id
    @GeneratedValue
    private Long feedbackDetId;
    private String question;
    private String response;

    @ManyToOne
    @JoinColumn(name="feedbackId")
    private Feedback feedback;
}
