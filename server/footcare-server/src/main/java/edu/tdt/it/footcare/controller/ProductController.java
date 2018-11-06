package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.payload.product.ProductResponse;
import edu.tdt.it.footcare.service.ProductService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@Setter(onMethod = @__(@Autowired))
public class ProductController {

    private ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAllProducts(ServletRequest request) {
        List<Product> productList;
        if (request.getParameterMap().containsKey("brandId")) {
            productList = productService.getAllProductsOf(Long.parseLong(request.getParameter("brandId")));
        } else {
            productList = productService.getAllProducts();
        }
        List<ProductResponse> responses = productService.mapProductToResponse(productList);
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable long productId) {
        Product product = productService.getProduct(productId);
        ProductResponse response = productService.createProductResponse(product);
        return ResponseEntity.ok(response);
    }


}
