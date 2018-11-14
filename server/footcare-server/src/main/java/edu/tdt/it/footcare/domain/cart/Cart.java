package edu.tdt.it.footcare.domain.cart;

import edu.tdt.it.footcare.config.audit.UserDateAudit;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Getter
@Setter
public class Cart extends UserDateAudit {

    public Cart() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "cart_product",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "product_in_selling_id"))
    private Set<ProductInSelling> products = new HashSet<>();

    public void clear() {
        this.getProducts().clear();
    }



}
