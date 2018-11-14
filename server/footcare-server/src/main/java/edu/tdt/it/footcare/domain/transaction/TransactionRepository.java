package edu.tdt.it.footcare.domain.transaction;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByCreatedBy(long customerId);
}
