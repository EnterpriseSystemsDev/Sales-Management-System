package edu.tdt.it.footcare.domain.person;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.domain.store.Store;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true, of = "id")
@Entity
@Data
public class Employee extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    public Employee() {
        super();
        workFrom = LocalDate.now();
    }

    @Column
    protected long salary;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    private Store store;

    protected LocalDate workFrom;

}
