package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.brand.Brand;
import edu.tdt.it.footcare.domain.brand.BrandRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.brand.AddBrandRequest;
import edu.tdt.it.footcare.payload.brand.BrandResponse;
import edu.tdt.it.footcare.payload.product.ProductResponse;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Setter(onMethod = @__(@Autowired))
public class BrandService {
    private BrandRepository brandRepository;
    private ProductService productService;

    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    public Brand findById(long brandId) {
        return brandRepository.findById(brandId).orElseThrow(() -> new AppException("Khong ton tai Brand"));
    }

    public Brand save(Brand brand) {
        return brandRepository.save(brand);
    }

    public Brand createBrand(AddBrandRequest request) {
        Brand brand = new Brand();
        brand.setName(request.getName());
        brand.setImage(request.getImage());
        return save(brand);
    }

    public BrandResponse createBrandResponse(Brand brand) {
        BrandResponse response = new BrandResponse();
        response.setName(brand.getName());
        response.setId(brand.getId());
        response.setImage(brand.getImage());
        if (brand.getProducts() != null) {
            List<ProductResponse> responses = productService.mapProductsToResponses(brand.getProducts());
            response.setProducts(responses);
        }
        return response;
    }

    public List<BrandResponse> mapBrandsToResponse(List<Brand> brands) {
        return brands.stream().map(this::createBrandResponse).collect(Collectors.toList());
    }
}
