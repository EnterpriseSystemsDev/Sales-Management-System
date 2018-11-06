package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.product.version.ProductVersionRepository;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInStock;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInStockRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.transaction.OrderStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    private ProductInStockRepository productInStockRepository;
    private ProductVersionRepository productVersionRepository;

    @Autowired
    public void setProductVersionRepository(ProductVersionRepository productVersionRepository) {
        this.productVersionRepository = productVersionRepository;
    }

    @Autowired
    public void setProductInStockRepository(ProductInStockRepository productInStockRepository) {
        this.productInStockRepository = productInStockRepository;
    }

    public boolean isEnoughQuantity(long versionId, double size, int count) {
        return count <= productInStockRepository
                .numOfProduct(productVersionRepository.findById(versionId), size).orElse(0L);
    }

    public OrderStatus checkOrder(List<ProductInSelling> products) {
        boolean orderValid = true;
        StringBuilder message = new StringBuilder();
        for (ProductInSelling product : products) {
            ProductVersion productVersion = product.getProductVersion();
            boolean enoughQuantity = isEnoughQuantity(productVersion.getId(), product.getSize(), product.getCount());
            orderValid &= enoughQuantity;
            if (!enoughQuantity) {
                message.append("Khong du so luong san pham ")
                        .append(productVersion.getVersionName())
                        .append(" trong kho.")
                        .append(System.getProperty("line.separator"));
            }
        }
        OrderStatus status = new OrderStatus();
        status.setSuccess(orderValid);
        status.setMessage(message.toString());
        return status;
    }

    public void moveProducts(List<ProductInSelling> products, long srcId, long destId) {
        notifyProductChanges(srcId, products, false);
        notifyProductChanges(destId, products, true);
    }

    public void notifyProductChanges(long storeId, List<ProductInSelling> products, boolean isIncrease) {
        products.forEach(prod -> modifyProductCount(storeId, prod.getProductVersion().getId(), prod.getSize(), prod.getCount(), isIncrease));
    }

    public void modifyProductCount(long storeId, long versionId, double size, int count, boolean isIncrease) {
        ProductInStock product = productInStockRepository.findByStore_IdAndProductVersion_IdAndSize(storeId, versionId, size)
                .orElseThrow(() -> new AppException("Khong co san pham trong kho"));

        product.setCount(product.getCount() + (isIncrease ? count : (-count)));
        productInStockRepository.save(product);
    }
}
