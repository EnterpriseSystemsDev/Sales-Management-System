package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.product.wrapper.ProductInStock;
import edu.tdt.it.footcare.domain.store.StoreRepository;
import edu.tdt.it.footcare.payload.stock.AddToStockRequest;
import edu.tdt.it.footcare.payload.stock.MoveProductRequest;
import edu.tdt.it.footcare.service.StockService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.validation.Valid;

@RestController
@PreAuthorize("hasAnyRole('EMPLOYEE', 'MANAGER')")
@Setter(onMethod = @__(@Autowired))
@RequestMapping("/api/stocks")
public class StockController {
    private StockService stockService;
    private StoreRepository storeRepository;

    @PostMapping("/{productId}/move")
    public ResponseEntity<?> moveProduct(@Valid @RequestBody MoveProductRequest request, @PathVariable long productId) {
        return ResponseEntity.ok(stockService.moveProducts(request, productId));
    }

    @PostMapping("/{productId}/add")
    public ResponseEntity<?> updateStock(@Valid @RequestBody AddToStockRequest request, @PathVariable long productId) {
        ProductInStock stock = stockService.updateStock(request.getStoreId(), productId, request.getSize(), request.getCount(), true);
        return ResponseEntity.ok(stock);
    }

    @GetMapping
    public ResponseEntity<?> getStock(ServletRequest request) {
        if (request.getParameterMap().containsKey("productId")) {
            return ResponseEntity.ok(stockService.mapStocksToResponses(
                    stockService.viewStock(Long.parseLong(request.getParameter("productId")))));
        } else {
            return ResponseEntity.ok(stockService.mapStocksToResponses(
                    stockService.viewAllStock()));
        }
    }

    @GetMapping("/storeId")
    public ResponseEntity<?> getStockOfStore(ServletRequest request, @PathVariable long storeId) {
        if (!storeRepository.existsById(storeId)) {
            return ResponseEntity.badRequest().body("Cua hang khong ton tai");
        }
        if (request.getParameterMap().containsKey("productId")) {
            return ResponseEntity.ok(stockService.mapStocksToResponses(
                    stockService.viewStockOfStore(storeId, Long.parseLong(request.getParameter("productId")))));
        } else {
            return ResponseEntity.ok(stockService.mapStocksToResponses(
                    stockService.viewStockOfStore(storeId)));
        }
    }
}
