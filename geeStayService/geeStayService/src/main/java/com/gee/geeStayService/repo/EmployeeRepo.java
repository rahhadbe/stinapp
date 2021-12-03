package com.gee.geeStayService.repo;

import com.gee.geeStayService.entity.Employee;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.*;

import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    @Query( value = "SELECT * FROM employee u WHERE u.email = :email", nativeQuery = true)
    Employee getEmployeeByEmail(String email);
}
