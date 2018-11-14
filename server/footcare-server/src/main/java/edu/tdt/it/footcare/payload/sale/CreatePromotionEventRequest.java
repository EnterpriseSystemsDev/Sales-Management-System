package edu.tdt.it.footcare.payload.sale;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Data
public class CreatePromotionEventRequest {

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate endDate;

    private Set<CreatePromotionProductRequest> products;
}
