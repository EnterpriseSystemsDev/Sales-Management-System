package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.ProductRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.product.ProductResponse;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Setter(onMethod = @__(@Autowired))
public class ProductService {

    private ProductRepository productRepository;
    private ProductVersionService productVersionService;

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

    public ProductResponse createProductResponse(Product pro) {
        ProductResponse response = new ProductResponse();
        response.setDescription(pro.getDescription());
        response.setName(pro.getName());
        response.setVersions(productVersionService.mapVersionsToResponses(pro.getVersions()));
        return response;
    }

    public List<ProductResponse> mapProductToResponse(List<Product> products) {
        return products.stream().map(this::createProductResponse).collect(Collectors.toList());
    }


}
