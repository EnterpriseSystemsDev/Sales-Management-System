package edu.tdt.it.footcare.domain.store;

import edu.tdt.it.footcare.domain.person.Employee;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInStock;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String address;

    @OneToMany(mappedBy = "store")
    private List<Employee> employees;

    @OneToMany(mappedBy = "store")
    private List<ProductInStock> products;

}

