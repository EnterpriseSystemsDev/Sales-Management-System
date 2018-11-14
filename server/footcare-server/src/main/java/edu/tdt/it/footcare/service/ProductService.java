package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.ProductRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.product.ProductRequest;
import edu.tdt.it.footcare.payload.product.ProductResponse;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Setter(onMethod = @__(@Autowired))
public class ProductService {
    private ProductRepository productRepository;
    private ProductWrapperService productWrapperService;
    private BrandService brandService;

    public Set<Product> getAll() {
        return productRepository.findAll();
    }

    public Set<Product> allProductsOf(long brandId) {
        return productRepository.findAllByBrand_Id(brandId);
    }

    public Product addProduct(ProductRequest request) {
        Product product = new Product();
        product.setBrand(brandService.findById(request.getBrandId()));
        product.setImages(request.getImages());
        product.setPrice(request.getPrice());
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        return save(product);
    }

    public Product updateProduct(ProductRequest request, long versionId) {
        if (!existById(versionId)) throw new AppException("Khong tim thay san pham");
        Product version = findById(versionId);
        version.setDescription(request.getDescription());
        version.setName(request.getName());
        version.setPrice(request.getPrice());
        return save(version);
    }

    public Product save(Product version) {
        return productRepository.save(version);
    }

    public boolean existById(long versionId) {
        return productRepository.existsById(versionId);
    }

    public Product findById(long id) {
        return productRepository.findById(id).orElseThrow(() -> new AppException("San pham khong ton tai"));
    }

    public ProductResponse createProductResponse(Product product) {
        ProductResponse response = new ProductResponse();
        response.setSaleOff(product.isOnSaleOff());
        response.setHot(product.isHot());
        response.setDescription(product.getDescription());
        response.setProductId(product.getId());
        response.setName(product.getName());
        response.setImages(product.getImages());
        response.setPrice(product.getPrice());
        response.setCurrentPrice(currentPriceOf(product));
        return response;
    }

    public Set<ProductResponse> mapProductsToResponses(Set<Product> products) {
        return products.stream().map(this::createProductResponse).collect(Collectors.toSet());
    }

    private double currentPriceOf(Product product) {
        return productWrapperService.calculateProductMoney(product);
    }

}
