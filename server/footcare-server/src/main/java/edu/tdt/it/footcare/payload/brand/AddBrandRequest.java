package edu.tdt.it.footcare.payload.brand;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@NoArgsConstructor
public class AddBrandRequest {

    @NotNull
    private String name;

    private List<String> images;
}
