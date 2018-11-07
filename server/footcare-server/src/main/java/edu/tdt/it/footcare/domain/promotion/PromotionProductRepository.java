package edu.tdt.it.footcare.domain.promotion;

import org.springframework.data.repository.CrudRepository;

public interface PromotionProductRepository extends CrudRepository<PromotionProduct, Long> {
    PromotionProduct findByProduct_Id(long productVersionId);

    boolean existsByProduct_Id(long productVersionId);
}
