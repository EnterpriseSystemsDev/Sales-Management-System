package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.payload.product.ProductRequest;
import edu.tdt.it.footcare.service.ProductService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@RestController
@Setter(onMethod = @__(@Autowired))
@RequestMapping("/api/products")
public class ProductController {
    private ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAllProducts(ServletRequest request) {
        Set<Product> products;
        if (request.getParameterMap().containsKey("brandId")) {
            products = productService.allProductsOf(Long.parseLong(request.getParameter("productId")));
        } else {
            products = productService.getAll();
        }
        return ResponseEntity.ok(productService.mapProductsToResponses(products));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('EMPLOYEE','MANAGER')")
    public ResponseEntity<?> addProduct(@Valid @RequestBody ProductRequest request) {
        Product version = productService.addProduct(request);
        return ResponseEntity.ok(productService.createProductResponse(version));
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable long productId) {
        Product product = productService.findById(productId);
        return ResponseEntity.ok(productService.createProductResponse(product));
    }

    @PutMapping("/{productId}")
    @PreAuthorize("hasAnyRole('EMPLOYEE','MANAGER')")
    public ResponseEntity<?> updateProduct(@Valid @RequestBody ProductRequest request, @PathVariable long productId) {
        return ResponseEntity.ok(productService.createProductResponse(productService.updateProduct(request, productId)));
    }

}
