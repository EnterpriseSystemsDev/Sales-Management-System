package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.service.ProductService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
@Setter(onMethod = @__(@Autowired))
public class ProductController {

    private ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/api/products/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable long productId) {
        return ResponseEntity.ok(productService.getProduct(productId));
    }

}
