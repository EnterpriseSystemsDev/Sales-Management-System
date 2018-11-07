package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.promotion.PromotionEvent;
import edu.tdt.it.footcare.domain.promotion.PromotionProduct;
import edu.tdt.it.footcare.payload.sale.CreatePromotionEventRequest;
import edu.tdt.it.footcare.payload.sale.CreatePromotionProductRequest;
import edu.tdt.it.footcare.service.PromotionService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@Setter(onMethod = @__(@Autowired))
@RequestMapping("/api/saleOff")
public class PromotionEventController {

    private PromotionService promotionService;

    @PostMapping("/createEvent")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> createSaleEvent(@Valid @RequestBody CreatePromotionEventRequest request) {
        PromotionEvent promotionEvent = promotionService.createSaleEvent(request);
        return ResponseEntity.ok(promotionEvent);
    }

    @PostMapping("/{eventId}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> addProductToEvent(@Valid @RequestBody CreatePromotionProductRequest request, @PathVariable long eventId) {
        PromotionEvent promotionEvent = promotionService.findByEventId(eventId);
        PromotionProduct promotionProduct = promotionService.createPromotionProduct(request);
        promotionEvent.getProducts().add(promotionProduct);
        promotionEvent = promotionService.saveEvent(promotionEvent);
        return ResponseEntity.ok(promotionEvent);
    }

}
