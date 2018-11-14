package edu.tdt.it.footcare.payload.transaction;

import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import lombok.Data;

import java.time.Instant;
import java.util.List;
import java.util.Set;

@Data
public class BillResponse {

    private long id;

    private String customerName;

    private String employeeName;

    private double totalMoney;

    private double customerMoney;

    private double change;

    private Set<ProductWrapperResponse> products;

    private String storeAddress;

    private Instant createdAt;

}
