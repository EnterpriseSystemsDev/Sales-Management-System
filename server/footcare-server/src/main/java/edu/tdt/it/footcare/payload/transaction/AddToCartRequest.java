package edu.tdt.it.footcare.payload.transaction;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class AddToCartRequest {

    @NotNull
    private long productVersionId;

    @NotNull
    private int count;

    @NotNull
    private double size;

}
