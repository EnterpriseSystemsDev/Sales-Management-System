package edu.tdt.it.footcare.domain.bill;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.config.audit.UserDateAudit;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.store.Store;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@EqualsAndHashCode(callSuper = false)
@Entity
@Data
@NoArgsConstructor
public class Bill extends UserDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double totalMoney;
    private double moneyOfCustomer;
    private double change;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "bill_product", joinColumns = @JoinColumn(name = "bill_id"),
            inverseJoinColumns = @JoinColumn(name = "product_in_selling_id"))
    private Set<ProductInSelling> products = new HashSet<>();

    @JsonIgnore
    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Store store;

}
