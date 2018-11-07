package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.promotion.PromotionEvent;
import edu.tdt.it.footcare.domain.promotion.PromotionProduct;
import edu.tdt.it.footcare.domain.promotion.PromotionProductRepository;
import edu.tdt.it.footcare.domain.promotion.PromotionRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.sale.CreatePromotionEventRequest;
import edu.tdt.it.footcare.payload.sale.CreatePromotionProductRequest;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Setter(onMethod = @__(@Autowired))
public class PromotionService {
    private PromotionRepository promotionRepository;
    private PromotionProductRepository promotionProductRepository;
    private ProductService productService;

    public PromotionEvent saveEvent(PromotionEvent e) {
        return promotionRepository.save(e);
    }

    public PromotionEvent findByEventId(long id) {
        return promotionRepository.findById(id).orElseThrow(() -> new AppException("Khong ton tai event"));
    }

    public PromotionProduct getProductSaleOffInfo(long prodId) {
        return promotionProductRepository.findByProduct_Id(prodId);
    }

    public PromotionEvent createSaleEvent(CreatePromotionEventRequest request) {
        PromotionEvent event = new PromotionEvent();
        event.setStartDate(request.getStartDate());
        event.setEndDate(request.getEndDate());
        if (request.getProducts() != null) {
            event.setProducts(request.getProducts()
                    .stream().map(this::createPromotionProduct).collect(Collectors.toList()));
        }
        return promotionRepository.save(event);
    }

    public PromotionProduct createPromotionProduct(CreatePromotionProductRequest request) {
        PromotionProduct promotionProduct = new PromotionProduct();
        promotionProduct.setSize(request.getSize());
        promotionProduct.setOffPercent(request.getOffPercent());
        promotionProduct.setCount(request.getCount());
        promotionProduct.setProduct(productService.findById(request.getVersionId()));
        return promotionProductRepository.save(promotionProduct);
    }

    public boolean isProductOnSale(Product product) {
        if (promotionRepository.isThereAnySaleEvent(LocalDate.now())) {
            List<PromotionEvent> events = promotionRepository.getSaleOffEvents(LocalDate.now());
            return events.stream().map(PromotionEvent::getProducts)
                    .anyMatch(list -> list.stream()
                            .map(PromotionProduct::getProduct)
                            .anyMatch(pro -> pro.getId() == product.getId()));
        }
        return false;
    }
}
