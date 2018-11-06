package edu.tdt.it.footcare.domain.product.version;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductVersionRepository extends CrudRepository<ProductVersion, Long> {
    ProductVersion findById(long versionId);

    List<ProductVersion> findAllByProduct_Id(long productId);

    List<ProductVersion> findAllByProduct_Name(String productName);

    List<ProductVersion> findAllByAvailable(boolean available);

    List<ProductVersion> findAllByHot(boolean hot);

    List<ProductVersion> findAllByOnSaleOff(boolean onSaleOff);

}