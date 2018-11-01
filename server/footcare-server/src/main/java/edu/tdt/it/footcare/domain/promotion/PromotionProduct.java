package edu.tdt.it.footcare.domain.promotion;

import edu.tdt.it.footcare.domain.product.wrapper.ProductWrapper;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
public class PromotionProduct extends ProductWrapper {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double offPercent;

}
