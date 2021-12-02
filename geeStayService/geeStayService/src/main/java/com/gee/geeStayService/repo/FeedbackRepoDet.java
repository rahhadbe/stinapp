package com.gee.geeStayService.repo;

import com.gee.geeStayService.entity.FeedbackDet;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface FeedbackRepoDet extends JpaRepository<FeedbackDet, Long> {

    @Query( value = "SELECT * FROM feedbackdet u WHERE u.feedbackid = :id", nativeQuery = true)
    List <FeedbackDet> getFeedbackById(Long id);

}