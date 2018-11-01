package edu.tdt.it.footcare.domain.cart;

import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cart_product",
            inverseJoinColumns = @JoinColumn(name = "product_version_id"))
    private List<ProductInSelling> products = new ArrayList<>();

    @OneToOne(mappedBy = "cart")
    private Customer customer;

}
