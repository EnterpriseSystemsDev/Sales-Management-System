package edu.tdt.it.footcare.domain.transaction;

import edu.tdt.it.footcare.config.audit.UserDateAudit;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@EqualsAndHashCode(callSuper = false)
@Getter
@Setter
@Entity
public class Transaction extends UserDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;

    @Enumerated(EnumType.STRING)
    private TransactionResult transactionResult;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "transaction_product",
            joinColumns = @JoinColumn(name = "transaction_id"),
            inverseJoinColumns = @JoinColumn(name = "product_in_selling_id"))
    private Set<ProductInSelling> products = new HashSet<>();

    public Transaction() {
    }

}