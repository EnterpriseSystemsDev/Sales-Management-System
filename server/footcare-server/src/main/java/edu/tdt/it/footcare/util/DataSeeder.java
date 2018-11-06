package edu.tdt.it.footcare.util;

import edu.tdt.it.footcare.domain.brand.Brand;
import edu.tdt.it.footcare.domain.brand.BrandRepository;
import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.domain.product.ProductRepository;
import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.store.StoreRepository;
import edu.tdt.it.footcare.service.AuthService;
import edu.tdt.it.footcare.service.CustomerService;
import edu.tdt.it.footcare.service.ProductVersionService;
import edu.tdt.it.footcare.service.StockService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Setter(onMethod = @__(@Autowired))
public class DataSeeder {
    private AuthService authService;
    private CustomerService customerService;
    private StoreRepository storeRepository;
    private StockService stockService;
    private ProductRepository productRepository;
    private BrandRepository brandRepository;
    private ProductVersionService productVersionService;

    public void seedCustomers() {

    }

    public void seedEmployees() {

    }

    public void seedManagers() {

    }


    public List<Product> seedProducts() {
        Brand brand = new Brand();
        brand.setName("Jordan");
        List<String> images = new ArrayList<>();
        images.add("jordan.jpg");
        brand.setImages(images);

        List<Product> products = new ArrayList<>();
        Product product = new Product();
        product.setBrand(brand);
        product.setDescription("Jordan brand description");
        product.setName("Jordan 1");
        product.setDescription("Jordan 1 description");

        List<ProductVersion> productVersions = new ArrayList<>();
        ProductVersion version = new ProductVersion();
        version.setVersionName("Bred");
        version.setAvailable(true);
        version.setDescription("Bred description");
        version.setHot(true);
        version.setOnSaleOff(false);
        version.setPrice(200);
        version.setProduct(product);
        List<String> versionImages = new ArrayList<>();
        versionImages.add("bred.jpg");
        version.setImages(versionImages);
        version = productVersionService.save(version);

        productVersions.add(version);
        product.setVersions(productVersions);
        product = productRepository.save(product);
        products.add(product);
        brand.setProducts(products);
        brandRepository.save(brand);
        return products;
    }

    public void seedVersions() {

    }

    public void seedStores() {

    }

    public void seedStocks(){

    }

    public void createBillRequests() {

    }
}
