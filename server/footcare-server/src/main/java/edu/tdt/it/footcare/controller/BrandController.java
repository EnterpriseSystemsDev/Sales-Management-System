package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.brand.Brand;
import edu.tdt.it.footcare.payload.brand.AddBrandRequest;
import edu.tdt.it.footcare.service.BrandService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Setter(onMethod = @__(@Autowired))
@RequestMapping("/api/brands")
public class BrandController {

    private BrandService brandService;

    @GetMapping
    public ResponseEntity<?> getAllBrands() {
        List<Brand> brands = brandService.getAllBrands();
        return ResponseEntity.ok(brandService.mapBrandsToResponse(brands));
    }

    @PostMapping
    public ResponseEntity<?> addBrand(@RequestBody @Valid AddBrandRequest request) {
        Brand brand = brandService.createBrand(request);
        return ResponseEntity.ok(brandService.createBrandResponse(brand));
    }

    @GetMapping("/{brandId}")
    public ResponseEntity<?> getBrand(@PathVariable long brandId) {
        Brand brand = brandService.findById(brandId);
        return ResponseEntity.ok(brandService.createBrandResponse(brand));
    }

}
