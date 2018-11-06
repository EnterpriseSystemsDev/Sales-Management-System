package edu.tdt.it.footcare.payload.product;

import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {

    private long id;

    private String name;

    private List<ProductVersionResponse> versions;

    private String description;

}
