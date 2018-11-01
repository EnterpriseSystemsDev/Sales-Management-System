package edu.tdt.it.footcare.domain.person;

import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.domain.store.Store;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Employee extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    public Employee() {
        super();
    }

    @Column
    private long salary;

    @ManyToOne
    private Store store;

}
