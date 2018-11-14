package edu.tdt.it.footcare.payload.brand;

import edu.tdt.it.footcare.payload.product.ProductResponse;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class BrandResponse {
    private long id;
    private String name;

    private Set<ProductResponse> products;

    private String image;
}
