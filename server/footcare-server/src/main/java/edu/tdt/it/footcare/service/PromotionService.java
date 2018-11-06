package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.product.wrapper.ProductWrapper;
import edu.tdt.it.footcare.domain.promotion.PromotionEvent;
import edu.tdt.it.footcare.domain.promotion.PromotionProduct;
import edu.tdt.it.footcare.domain.promotion.PromotionProductRepository;
import edu.tdt.it.footcare.domain.promotion.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PromotionService {
    private PromotionRepository promotionRepository;
    private PromotionProductRepository promotionProductRepository;

    @Autowired
    public void setPromotionProductRepository(PromotionProductRepository promotionProductRepository) {
        this.promotionProductRepository = promotionProductRepository;
    }

    @Autowired
    public void setPromotionRepository(PromotionRepository promotionRepository) {
        this.promotionRepository = promotionRepository;
    }

    public boolean isVersionOnSaleOff(ProductVersion productVersion) {
        if (promotionRepository.isThereAnySaleEvent(LocalDate.now())) {
            List<PromotionEvent> events = promotionRepository.getSaleOffEvents(LocalDate.now());
            return events.stream().map(PromotionEvent::getProducts)
                    .anyMatch(list -> list.stream()
                            .map(ProductWrapper::getProductVersion)
                            .anyMatch(pro -> pro.equals(productVersion)));
        }
        return false;
    }

    public PromotionProduct getSaleOffInfo(long id) {
        return promotionProductRepository.findByProductVersion_Id(id);
    }
}
