package edu.tdt.it.footcare.domain.brand;

import edu.tdt.it.footcare.domain.product.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany(mappedBy = "brand")
    private List<Product> products;

    @ElementCollection
    private List<String> images;

}
