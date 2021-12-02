package com.gee.geeStayService.repo;

import com.gee.geeStayService.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

    Feedback getByFeedbackid(Long id);

}
