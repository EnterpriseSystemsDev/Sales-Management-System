package edu.tdt.it.footcare.payload.product;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Data
public class ProductRequest {

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private long brandId;

    @NotNull
    private double price;

    private Set<String> images;

}
