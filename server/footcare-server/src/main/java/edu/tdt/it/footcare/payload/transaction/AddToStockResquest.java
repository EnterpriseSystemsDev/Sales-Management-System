package edu.tdt.it.footcare.payload.transaction;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = false)
@Data
public class AddToStockResquest extends AddToCartRequest {
    private long storeId;
}
