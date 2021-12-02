package com.gee.geeStayService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "analysis")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Analysis {

    @Id
    @GeneratedValue
    private Long analysisid;

    @Temporal(TemporalType.DATE)
    private Date analysistime;
    private AnalysisType analysistype;
    private String feedbackids;
    private String analyzedvalue;

}
