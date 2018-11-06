package edu.tdt.it.footcare.domain.store;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends CrudRepository<Store, Long> {
    Optional<Store> findByManager_Account_Id(long id);
    List<Store> findAll();
}
