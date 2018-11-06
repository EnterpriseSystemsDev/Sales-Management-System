package edu.tdt.it.footcare.domain.product.wrapper;

import edu.tdt.it.footcare.domain.store.Store;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"product_version_id", "size", "store_id"})
})
public class ProductInStock extends ProductWrapper {

    public ProductInStock() {
        super();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Store store;

}

