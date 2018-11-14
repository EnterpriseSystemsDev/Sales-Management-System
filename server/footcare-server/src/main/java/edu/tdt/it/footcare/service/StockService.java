package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.ProductRepository;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInStock;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInStockRepository;
import edu.tdt.it.footcare.domain.store.StoreRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.stock.MoveProductRequest;
import edu.tdt.it.footcare.payload.stock.StockResponse;
import edu.tdt.it.footcare.payload.transaction.OrderStatus;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Setter(onMethod = @__(@Autowired))
public class StockService {

    private ProductInStockRepository productInStockRepository;
    private ProductRepository productRepository;
    private StoreRepository storeRepository;
    private ProductService productService;

    public boolean isEnoughQuantity(long versionId, double size, int count) {
        return count <= productInStockRepository
                .numOfProduct(
                        productRepository.findById(versionId).orElseThrow(() -> new AppException("Khong ton tai san pham")),
                        size
                ).orElse(0L);
    }

    public List<StockResponse> mapStocksToResponses(List<ProductInStock> stocks) {
        return stocks.stream().map(this::createStockResponse).collect(Collectors.toList());
    }

    public List<ProductInStock> viewAllStock() {
        return productInStockRepository.findAll();
    }

    public List<ProductInStock> viewStock(long productId) {
        return productInStockRepository.findByProduct_IdOrderByStore_Id(productId);
    }

    public List<ProductInStock> viewStockOfStore(long storeId) {
        return productInStockRepository.findByStore_IdOrderByProduct_Id(storeId);
    }

    public List<ProductInStock> viewStockOfStore(long storeId, long productId) {
        return productInStockRepository.findByStore_IdAndProduct_IdOrderByProduct_Id(storeId, productId);
    }

    public OrderStatus checkForOrder(Set<ProductInSelling> products) {
        boolean orderValid = true;
        StringBuilder message = new StringBuilder();
        for (ProductInSelling productInSelling : products) {
            Product product = productInSelling.getProduct();
            boolean enoughQuantity = isEnoughQuantity(product.getId(), productInSelling.getSize(), productInSelling.getCount());
            orderValid &= enoughQuantity;
            if (!enoughQuantity) {
                message.append("Khong du so luong san pham ")
                        .append(product.getName())
                        .append(" trong kho.")
                        .append(System.getProperty("line.separator"));
            }
        }
        OrderStatus status = new OrderStatus();
        status.setSuccess(orderValid);
        status.setMessage(message.toString());
        return status;
    }

    public List<StockResponse> moveProducts(MoveProductRequest request, long productId) {
        return Arrays.asList(
                createStockResponse(
                        updateStock(
                                request.getSourceStoreId(),
                                productId,
                                request.getSize(),
                                request.getCount(),
                                false)),
                createStockResponse(
                        updateStock(
                                request.getDestStoreId(),
                                productId,
                                request.getSize(),
                                request.getCount(),
                                true))
        );
    }

    public void notifyProductCountChanges(long storeId, Set<ProductInSelling> products, boolean isIncrease) {
        products.forEach(prod -> {
            if (!isProductInStock(storeId, prod.getProduct().getId(), prod.getSize())) {
                throw new AppException("San pham khong co trong cua hang");
            }
            modifyProductCount(storeId, prod.getProduct().getId(), prod.getSize(), prod.getCount(), isIncrease);
        });
    }

    private boolean isProductInStock(long storeId, long productId, double size) {
        return productInStockRepository.existsByStore_IdAndProduct_IdAndSize(storeId, productId, size);
    }

    public ProductInStock modifyProductCount(long storeId, long versionId, double size, int count, boolean isIncrease) {
        ProductInStock product = productInStockRepository.findByStore_IdAndProduct_IdAndSize(storeId, versionId, size);
        product.setCount(product.getCount() + (isIncrease ? count : (-count)));
        return productInStockRepository.save(product);
    }

    public StockResponse createStockResponse(ProductInStock product) {
        StockResponse response = new StockResponse();
        response.setCount(product.getCount());
        response.setSize(product.getSize());
        response.setProductName(product.getProduct().getName());
        response.setStore(product.getStore().getAddress());
        return response;
    }

    private ProductInStock addProductToStock(long storeId, long productId, double size, int count) {
        if (!productService.existById(productId)) {
            throw new AppException("Khong ton tai san pham");
        }
        ProductInStock product = new ProductInStock();
        product.setCount(count);
        product.setSize(size);
        product.setStore(storeRepository.findById(storeId).orElseThrow(() -> new AppException("Khong ton tai cua hang")));
        product.setProduct(productService.findById(productId));
        return productInStockRepository.save(product);
    }

    public ProductInStock updateStock(long storeId, long productId, double size, int count, boolean isIncrease) {
        return isProductInStock(storeId, productId, size) ?
                this.modifyProductCount(storeId, productId, size, count, isIncrease)
                : this.addProductToStock(storeId, productId, size, count);
    }
}
