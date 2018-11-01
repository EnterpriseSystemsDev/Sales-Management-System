package edu.tdt.it.footcare.domain.product.wrapper;

import edu.tdt.it.footcare.domain.store.Store;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@EqualsAndHashCode(callSuper = true)
@Data
public class ProductInStock extends ProductWrapper {

    public ProductInStock() {
        super();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Store store;

    @LastModifiedDate
    private LocalDateTime lastModifiedTime;

}

