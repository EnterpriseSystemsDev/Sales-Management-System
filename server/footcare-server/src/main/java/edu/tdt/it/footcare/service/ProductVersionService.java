package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.product.version.ProductVersionRepository;
import edu.tdt.it.footcare.payload.product.ProductVersionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductVersionService {
    private ProductVersionRepository productVersionRepository;
    private ProductWrapperService productWrapperService;

    @Autowired
    public void setProductVersionRepository(ProductVersionRepository productVersionRepository) {
        this.productVersionRepository = productVersionRepository;
    }

    @Autowired
    public void setProductWrapperService(ProductWrapperService productWrapperService) {
        this.productWrapperService = productWrapperService;
    }

    public List<ProductVersion> allVersionsOf(long productId) {
        return productVersionRepository.findAllByProduct_Id(productId);
    }

    public boolean existsByVersionId(long versionId) {
        return productVersionRepository.existsById(versionId);
    }

    public ProductVersion findByVersionId(long id) {
        return productVersionRepository.findById(id);
    }

    public ProductVersionResponse createResponse(ProductVersion productVersion) {
        ProductVersionResponse response = new ProductVersionResponse();
        response.setImages(productVersion.getImages());
        response.setPrice(productVersion.getPrice());
        response.setCurrentPrice(currentPriceOf(productVersion));
        return response;
    }

    private double currentPriceOf(ProductVersion productVersion) {
        return productWrapperService.calculateProductMoney(productVersion);
    }

    public ProductVersion save(ProductVersion version) {
        return productVersionRepository.save(version);
    }
}
