package edu.tdt.it.footcare.domain.history;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TransactionHistoryRepository extends CrudRepository<TransactionHistory, Long> {
}
