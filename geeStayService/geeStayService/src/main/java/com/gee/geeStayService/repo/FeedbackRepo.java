package com.gee.geeStayService.repo;

import com.gee.geeStayService.entity.Feedback;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

    @Query( value = "SELECT * FROM feedback u WHERE u.employeeemail = :email", nativeQuery = true)
    List <Feedback> getFeedbackByEmail(String email);

}