package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.ProductRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.product.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsOf(long brandId) {
        return productRepository.findAllByBrand_Id(brandId);
    }

    public Product getProduct(long productId) {
        return productRepository.findById(productId).orElseThrow(
                () -> new AppException("Khong tim thay san pham"));
    }

}
