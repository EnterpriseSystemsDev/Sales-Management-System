package edu.tdt.it.footcare.payload.transaction;

import edu.tdt.it.footcare.payload.auth.RegisterRequest;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Data
public class OfflineBillRequest {

    // means username, email, phone or name
    @NotNull
    private String customerKey;

    @NotNull
    private double customerMoney;

    private Set<AddToCartRequest> products;

    private RegisterRequest registerRequest;

}

