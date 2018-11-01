package edu.tdt.it.footcare.domain.history;

import edu.tdt.it.footcare.config.audit.DateAudit;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@EqualsAndHashCode(callSuper = false)
@Data
@Entity
@NoArgsConstructor
public class TransactionHistory extends DateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "transaction_history_product",
            inverseJoinColumns = @JoinColumn(name = "product_version_id"))
    private List<ProductInSelling> products;

    @ManyToOne
    private Customer customer;

}
