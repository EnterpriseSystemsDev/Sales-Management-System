package edu.tdt.it.footcare.domain.person;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Set;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByAccount_Id(long id);

    Set<Employee> findByStore_Id(long storeId);
}
