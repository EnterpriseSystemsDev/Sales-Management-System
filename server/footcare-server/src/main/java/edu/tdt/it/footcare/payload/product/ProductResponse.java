package edu.tdt.it.footcare.payload.product;

import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {
    private String description;
    private long productId;
    private String name;
    private double price;
    private double currentPrice;
    private List<String> images;
}
