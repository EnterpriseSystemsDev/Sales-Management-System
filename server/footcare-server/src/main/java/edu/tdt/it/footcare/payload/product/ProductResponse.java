package edu.tdt.it.footcare.payload.product;

import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {
    private String name;

    private List<ProductWrapperResponse> versions;

    private String description;
}
