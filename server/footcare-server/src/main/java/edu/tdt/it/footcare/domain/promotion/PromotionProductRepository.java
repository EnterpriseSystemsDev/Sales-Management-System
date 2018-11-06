package edu.tdt.it.footcare.domain.promotion;

import org.springframework.data.repository.CrudRepository;

public interface PromotionProductRepository extends CrudRepository<PromotionProduct, Long> {
    PromotionProduct findByProductVersion_Id(long productVersionId);

    boolean existsByProductVersion_Id(long productVersionId);
}
