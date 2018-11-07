package edu.tdt.it.footcare.payload.sale;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Data
public class CreatePromotionEventRequest {

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate endDate;

    private List<CreatePromotionProductRequest> products;
}
