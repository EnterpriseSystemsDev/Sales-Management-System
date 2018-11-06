package edu.tdt.it.footcare.domain.person;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    Optional<Employee> findByAccount_Id(long id);
    List<Employee> findByStore_Id(long storeId);
}
