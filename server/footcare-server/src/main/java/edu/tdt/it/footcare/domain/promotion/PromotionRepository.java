package edu.tdt.it.footcare.domain.promotion;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PromotionRepository extends CrudRepository<PromotionEvent, Long> {
}

@RepositoryRestResource
interface PromotionProductRepository extends CrudRepository<PromotionProduct, Long> {
}
