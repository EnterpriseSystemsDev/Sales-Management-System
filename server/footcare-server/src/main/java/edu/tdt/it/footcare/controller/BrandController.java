//package edu.tdt.it.footcare.controller;
//
//import edu.tdt.it.footcare.domain.brand.Brand;
//import edu.tdt.it.footcare.domain.brand.BrandRepository;
//import edu.tdt.it.footcare.payload.AddBrandRequest;
//import edu.tdt.it.footcare.service.ProductService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/brands")
//public class BrandController {
//
//    private BrandRepository brandRepository;
//    private ProductService productService;
//
//    @Autowired
//    public void setBrandRepository(BrandRepository brandRepository) {
//        this.brandRepository = brandRepository;
//    }
//
//    @Autowired
//    public void setProductService(ProductService productService) {
//        this.productService = productService;
//    }
//
//    @GetMapping
//    public ResponseEntity<?> getAllBrands() {
//        return ResponseEntity.ok(brandRepository.findAll());
//    }
//
//    @GetMapping("/{brandId}")
//    public ResponseEntity<?> getBrand(@PathVariable long brandId) {
//        return ResponseEntity.ok(brandRepository.findById(brandId));
//    }
//
//    @GetMapping("/{brandId}/products")
//    public ResponseEntity<?> getProductsOfBrand(@PathVariable long brandId) {
//        return ResponseEntity.ok(productService.getAllProductsOf(brandId));
//    }
//
//    @PostMapping
//    public ResponseEntity<?> addBrand(AddBrandRequest request) {
//        Brand brand = new Brand();
//        brand.setName(request.getName());
//        return ResponseEntity.ok(brandRepository.save(brand));
//    }
//
//}
