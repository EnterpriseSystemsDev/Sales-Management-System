package edu.tdt.it.footcare.domain.person;

import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.domain.cart.Cart;
import edu.tdt.it.footcare.domain.history.TransactionHistory;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Customer extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public Customer() {
        super();
    }

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Cart cart = new Cart();

    @OneToMany(mappedBy = "customer")
    private List<TransactionHistory> history;

}
