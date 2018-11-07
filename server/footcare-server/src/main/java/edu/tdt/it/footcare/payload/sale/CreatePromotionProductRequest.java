package edu.tdt.it.footcare.payload.sale;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class CreatePromotionProductRequest {

    @NotNull
    private long productId;

    private double size = 0;

    private int count;

    @NotNull
    private double offPercent;
}
