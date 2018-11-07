package edu.tdt.it.footcare.domain.product.wrapper;

import edu.tdt.it.footcare.domain.product.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductInStockRepository extends CrudRepository<ProductInStock, Long> {

    List<ProductInStock> findAll();

    List<ProductInStock> findByProduct_IdOrderByStore_Id(long productId);

    List<ProductInStock> findByStore_IdOrderByProduct_Id(long storeId);

    List<ProductInStock> findByStore_IdAndProduct_IdOrderByProduct_Id(long storeId, long prodId);

    boolean existsByStore_IdAndProduct_IdAndSize(long storeId, long prodId, double size);

    ProductInStock findByStore_IdAndProduct_IdAndSize(long storeId, long prodId, double size);

    @Query("select sum(p.count) from ProductInStock p where p.product = :product and p.size = :size")
    Optional<Long> numOfProduct(@Param("product") Product product, @Param("size") double size);

    boolean existsByProduct_Id(long productId);
}