package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSellingRepository;
import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@Setter(onMethod = @__(@Autowired))
public class ProductWrapperService {
    private PromotionService promotionService;
    private ProductInSellingRepository productInSellingRepository;

    public double calculateTotalMoney(Set<ProductInSelling> products) {
        return products.stream().map(this::calculateProductMoney).reduce(Double::sum).orElse(0.0);
    }

    public double calculateProductMoney(Product product) {
        boolean isOnSaleOff = promotionService.isProductOnSale(product);
        double price = product.getPrice();
        return (!isOnSaleOff) ? price :
                price * (100 - promotionService.getProductSaleOffInfo(product.getId()).getOffPercent());
    }

    public double calculateProductMoney(ProductInSelling productInSelling) {
        return productInSelling.getCount()
                * calculateProductMoney(productInSelling.getProduct());
    }

    public Set<ProductWrapperResponse> mapWrapperToResponse(Set<ProductInSelling> products) {
        return products.stream().map(product -> {
            ProductWrapperResponse response = new ProductWrapperResponse();
            response.setProductId(product.getProduct().getId());
            response.setCount(product.getCount());
            response.setName(product.getProduct().getName());
            response.setSize(product.getSize());
            response.setPrice(product.getProduct().getPrice());
            return response;
        }).collect(Collectors.toSet());
    }

}
