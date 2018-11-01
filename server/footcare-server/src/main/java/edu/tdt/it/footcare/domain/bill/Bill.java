package edu.tdt.it.footcare.domain.bill;

import edu.tdt.it.footcare.config.audit.UserDateAudit;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.person.Employee;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.store.Store;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@EqualsAndHashCode(callSuper = false)
@Entity
@Data
@NoArgsConstructor
public class Bill extends UserDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double totalMoney;

    private double change;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "bill_product", inverseJoinColumns = @JoinColumn(name = "product_version_id"))
    private List<ProductInSelling> products;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Store store;

}
