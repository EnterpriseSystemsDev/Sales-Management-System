package edu.tdt.it.footcare.domain.cart;

import edu.tdt.it.footcare.config.audit.UserDateAudit;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Cart extends UserDateAudit {

    public Cart() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(name = "cart_product", inverseJoinColumns = @JoinColumn(name = "product_in_selling_id"))
    private List<ProductInSelling> products = new ArrayList<>();

    public void clear() {
        this.getProducts().clear();
    }

    public boolean contains(long versionId, double size) {
        return this.products.stream()
                .anyMatch(pro -> pro.getProductVersion().getId() == versionId && pro.getSize() == size);
    }

    public void modifyQuantity(long versionId, double size, int newCount) {
        this.products.stream()
                .filter(pro -> pro.getProductVersion().getId() == versionId && pro.getSize() == size)
                .findAny().ifPresent(pro ->
                pro.setCount(newCount));
    }

}
