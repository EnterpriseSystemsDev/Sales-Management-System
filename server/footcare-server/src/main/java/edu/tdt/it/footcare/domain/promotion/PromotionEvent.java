package edu.tdt.it.footcare.domain.promotion;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class PromotionEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate startDate;

    private LocalDate endDate;

    @ManyToMany
    @JoinTable(name = "promotion_event_product", inverseJoinColumns = @JoinColumn(name = "product_version_id"))
    private List<PromotionProduct> products;

}