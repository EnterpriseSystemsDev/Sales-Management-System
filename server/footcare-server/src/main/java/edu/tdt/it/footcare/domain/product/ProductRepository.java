package edu.tdt.it.footcare.domain.product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RepositoryRestResource(exported = false)
public interface ProductRepository extends CrudRepository<Product, Long> {
    Optional<Product> findById(long versionId);

    Set<Product> findAll();

    Set<Product> findAllByBrand_Id(long brandId);

    List<Product> findAllByAvailable(boolean available);

    List<Product> findAllByHot(boolean hot);

    List<Product> findAllByOnSaleOff(boolean onSaleOff);

}