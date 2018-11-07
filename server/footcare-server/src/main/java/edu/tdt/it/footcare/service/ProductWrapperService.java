package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSellingRepository;
import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import edu.tdt.it.footcare.payload.transaction.AddToCartRequest;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Setter(onMethod = @__(@Autowired))
public class ProductWrapperService {
    private PromotionService promotionService;
    private ProductService productService;
    private ProductInSellingRepository productInSellingRepository;

    public double calculateTotalMoney(List<ProductInSelling> products) {
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

    public List<ProductWrapperResponse> mapWrapperToResponse(List<ProductInSelling> products) {
        return products.stream().map(product -> {
            ProductWrapperResponse response = new ProductWrapperResponse();
            response.setProductId(product.getId());
            response.setCount(product.getCount());
            response.setName(product.getProduct().getName());
            response.setSize(product.getSize());
            response.setPrice(product.getProduct().getPrice());
            return response;
        }).collect(Collectors.toList());
    }

    public List<ProductInSelling> saveWrappersFromRequests(List<AddToCartRequest> requests) {
        return requests.stream().map(req -> {
            ProductInSelling product = new ProductInSelling();
            product.setProduct(productService.findById(req.getProductId()));
            product.setCount(req.getCount());
            product.setSize(req.getSize());
            return productInSellingRepository.save(product);
        }).collect(Collectors.toList());
    }

}
