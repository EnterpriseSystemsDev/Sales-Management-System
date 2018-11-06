package edu.tdt.it.footcare.domain.product.wrapper;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductInStockRepository extends CrudRepository<ProductInStock, Long> {
    List<ProductInStock> findByProductVersion_IdAndSize(long versionId, double size);

    Optional<ProductInStock> findByStore_IdAndProductVersion_IdAndSize(long storeId, long prodId, double size);

    @Query("select case when (count(p) >= :count) then true else false end from ProductInStock p " +
            "where p.productVersion = :versionId and p.size = :size")
    boolean isEnoughQuantity(@Param("versionId") long versionId, @Param("size") double size, @Param("count") int count);

    @Query("select sum(p.count) from ProductInStock p where p.productVersion = :productVersion and p.size = :size")
    Optional<Long> numOfProduct(@Param("productVersion") ProductVersion productVersion, @Param("size") double size);
}