package edu.tdt.it.footcare.domain.product.wrapper;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductInSellingRepository extends JpaRepository<ProductInSelling, Long> {
    ProductInSelling findByProduct_IdAndSize(long prodId, double size);
    boolean existsByProduct_IdAndSize(long prodId, double size);
}
