package edu.tdt.it.footcare.domain.product;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInStock;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @RestResource(path = "name")
    Optional<Product> findByNameContains(String name);
    List<Product> findAll();
    List<Product> findAllByBrand_Name(String brandName);
    List<Product> findAllByBrand_Id(long id);
}

interface ProductInStockRepository extends CrudRepository<ProductInStock, Long> {
}

interface ProductInSellingRepository extends CrudRepository<ProductInSelling, Long> {
}

interface ProductVersionRepository extends CrudRepository<ProductVersion, Long> {
}