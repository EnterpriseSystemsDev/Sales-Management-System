package edu.tdt.it.footcare.payload.stock;

import lombok.Data;

@Data
public class StockResponse {

    private String store;
    private String productName;
    private double size;
    private int count;

}
