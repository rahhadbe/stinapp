package com.gee.geeStayService.repo;

import com.gee.geeStayService.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    @Query( value = "SELECT * FROM employee u WHERE u.email = :email", nativeQuery = true)
    List <Employee> getEmployeeByEmail(String email);
}
