package edu.tdt.it.footcare.payload.stock;

import lombok.Data;

@Data
public class AddToStockRequest {

    private long storeId;

    private double size;

    private int count;

}
