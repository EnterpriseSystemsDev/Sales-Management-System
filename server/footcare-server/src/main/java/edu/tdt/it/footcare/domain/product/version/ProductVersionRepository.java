package edu.tdt.it.footcare.domain.product.version;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

public interface ProductVersionRepository extends CrudRepository<ProductVersion, Long> {
    List<ProductVersion> findAllByProduct_Id(long prodId);
}
