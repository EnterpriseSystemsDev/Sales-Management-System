package edu.tdt.it.footcare.domain.product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface ProductRepository extends CrudRepository<Product, Long> {
    Product findById(long versionId);

    List<Product> findAll();

    List<Product> findAllByBrand_Id(long brandId);

    List<Product> findAllByAvailable(boolean available);

    List<Product> findAllByHot(boolean hot);

    List<Product> findAllByOnSaleOff(boolean onSaleOff);

}