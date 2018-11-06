package edu.tdt.it.footcare.payload.product;

import lombok.Data;

import java.util.List;

@Data
public class ProductVersionResponse {
    private long productVersionId;
    private String versionName;
    private double price;
    private double currentPrice;
    private List<String> images;
}
