package edu.tdt.it.footcare.payload.product;

import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class ProductResponse {

    private boolean isHot;
    private boolean isSaleOff;
    private String description;
    private long productId;
    private String name;
    private double price;
    private double currentPrice;
    private Set<String> images;
}
