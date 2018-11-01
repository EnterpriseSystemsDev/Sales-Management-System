package edu.tdt.it.footcare.domain.product.type;

import edu.tdt.it.footcare.domain.product.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class ProductType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ElementCollection
    private List<String> images;

    @OneToMany(mappedBy = "type")
    private List<Product> products;
}
