package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSellingRepository;
import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import edu.tdt.it.footcare.payload.transaction.AddToCartRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductWrapperService {
    private PromotionService promotionService;
    private ProductVersionService productVersionService;
    private ProductInSellingRepository productInSellingRepository;

    @Autowired
    public void setProductInSellingRepository(ProductInSellingRepository productInSellingRepository) {
        this.productInSellingRepository = productInSellingRepository;
    }

    @Autowired
    public void setProductVersionService(ProductVersionService productVersionService) {
        this.productVersionService = productVersionService;
    }

    @Autowired
    public void setPromotionService(PromotionService promotionService) {
        this.promotionService = promotionService;
    }

    public double calculateTotalMoney(List<ProductInSelling> products) {
        return products.stream().map(this::calculateProductMoney).reduce(Double::sum).orElse(0.0);
    }

    public double calculateProductMoney(ProductVersion productVersion) {
        boolean isOnSaleOff = promotionService.isVersionOnSaleOff(productVersion);
        double price = productVersion.getPrice();
        return (!isOnSaleOff) ? price :
                price * (100 - promotionService.getSaleOffInfo(productVersion.getId()).getOffPercent());
    }

    public double calculateProductMoney(ProductInSelling productInSelling) {
        return productInSelling.getCount()
                * calculateProductMoney(productInSelling.getProductVersion());
    }

    public List<ProductWrapperResponse> mapWrapperToResponse(List<ProductInSelling> products) {
        return products.stream().map(product -> {
            ProductWrapperResponse response = new ProductWrapperResponse();
            response.setCount(product.getCount());
            response.setName(product.getProductVersion().getVersionName());
            response.setSize(product.getSize());
            response.setPrice(product.getProductVersion().getPrice());
            return response;
        }).collect(Collectors.toList());
    }

    public List<ProductInSelling> saveWrappersFromRequests(List<AddToCartRequest> requests) {
        return requests.stream().map(req -> {
            ProductInSelling product = new ProductInSelling();
            product.setProductVersion(productVersionService.findByVersionId(req.getProductVersionId()));
            product.setCount(req.getCount());
            product.setSize(req.getSize());
            return productInSellingRepository.save(product);
        }).collect(Collectors.toList());
    }

}
