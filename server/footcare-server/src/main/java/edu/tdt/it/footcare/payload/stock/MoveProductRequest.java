package edu.tdt.it.footcare.payload.stock;

import lombok.Data;

@Data
public class MoveProductRequest {

    private long sourceStoreId;

    private long destStoreId;

    private double size;

    private int count;

}
