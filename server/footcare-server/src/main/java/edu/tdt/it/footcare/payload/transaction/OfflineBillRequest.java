package edu.tdt.it.footcare.payload.transaction;

import edu.tdt.it.footcare.payload.auth.RegisterRequest;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class OfflineBillRequest {

    @NotNull
    private String customerKey;

    @NotNull
    private double customerMoney;

    private List<AddToCartRequest> products;

    private RegisterRequest registerRequest;

}

