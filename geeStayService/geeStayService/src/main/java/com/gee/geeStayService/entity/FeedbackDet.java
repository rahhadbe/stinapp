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
    private Long feedbackDetId;
    private Long feedbackId;
    private String question;
    private String response;

    @ManyToOne
    @JoinColumn(name="feedbackId")
    private Feedback feedback;
}
