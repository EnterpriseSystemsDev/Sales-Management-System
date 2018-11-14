package edu.tdt.it.footcare.domain.person;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Customer findByNameOrPhoneOrAccount_EmailOrAccount_Username(String keyword, String phone, String email, String username);

    boolean existsByNameOrPhoneOrAccount_EmailOrAccount_Username(String keyword, String phone, String email, String username);

    Optional<Customer> findByAccount_Id(long id);
}