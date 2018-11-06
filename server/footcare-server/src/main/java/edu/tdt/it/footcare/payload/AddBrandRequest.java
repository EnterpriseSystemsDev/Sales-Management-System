package edu.tdt.it.footcare.payload;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class AddBrandRequest {

    @NotNull
    private String name;
}
