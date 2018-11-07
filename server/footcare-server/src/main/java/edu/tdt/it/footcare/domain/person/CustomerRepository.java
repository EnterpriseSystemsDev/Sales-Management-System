package edu.tdt.it.footcare.domain.person;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Customer findByNameOrPhoneOrAccount_Email(String keyword, String phone, String email);

    boolean existsByNameOrPhoneOrAccount_Email(String keyword, String phone, String email);

    Optional<Customer> findByAccount_Id(long id);
}