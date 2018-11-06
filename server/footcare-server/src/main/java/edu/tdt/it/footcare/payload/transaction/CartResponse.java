package edu.tdt.it.footcare.payload.transaction;

import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import lombok.Data;

import java.util.List;

@Data
public class CartResponse  {

    private double totalMoney;

    private List<ProductWrapperResponse> products;

}
