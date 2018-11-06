package edu.tdt.it.footcare.domain.product.version;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface ProductVersionRepository extends CrudRepository<ProductVersion, Long> {
    ProductVersion findById(long versionId);

    List<ProductVersion> findAll();

    List<ProductVersion> findAllByProduct_Id(long productId);

    List<ProductVersion> findAllByProduct_Name(String productName);

    List<ProductVersion> findAllByAvailable(boolean available);

    List<ProductVersion> findAllByHot(boolean hot);

    List<ProductVersion> findAllByOnSaleOff(boolean onSaleOff);

}