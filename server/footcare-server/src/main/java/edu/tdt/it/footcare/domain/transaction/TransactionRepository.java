package edu.tdt.it.footcare.domain.transaction;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    Transaction findById(long id);
    boolean existsById(Long id);
    List<Transaction> findByCreatedBy(long customerId);
}
