package edu.tdt.it.footcare.payload.brand;

import edu.tdt.it.footcare.payload.product.ProductResponse;
import lombok.Data;

import java.util.List;

@Data
public class BrandResponse {
    private long id;
    private String name;

    private List<ProductResponse> products;

    private List<String> images;
}
