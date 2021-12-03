package com.gee.geeStayService.repo;

import com.gee.geeStayService.entity.Feedback;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

    List <Feedback> findByEmployeeemail(String employeemail);

}
