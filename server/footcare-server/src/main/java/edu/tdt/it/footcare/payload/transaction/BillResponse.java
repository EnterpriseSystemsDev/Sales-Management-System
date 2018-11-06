package edu.tdt.it.footcare.payload.transaction;

import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import lombok.Data;

import java.time.Instant;
import java.util.List;

@Data
public class BillResponse {

    private long id;

    private String customerName;

    private String employeeName;

    private double totalMoney;

    private double customerMoney;

    private double change;

    private List<ProductWrapperResponse> products;

    private String storeAddress;

    private Instant createdAt;

}
