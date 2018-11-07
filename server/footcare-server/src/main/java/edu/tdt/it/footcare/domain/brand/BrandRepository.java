package edu.tdt.it.footcare.domain.brand;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface BrandRepository extends CrudRepository<Brand, Long> {

    List<Brand> findAll();
}
