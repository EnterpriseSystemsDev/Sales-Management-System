package edu.tdt.it.footcare.domain.product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface ProductRepository extends CrudRepository<Product, Long> {
    @RestResource(path = "name")
    Optional<Product> findByNameContains(String name);

    List<Product> findAll();

    List<Product> findAllByBrand_Name(String brandName);

    List<Product> findAllByBrand_Id(long id);

}





