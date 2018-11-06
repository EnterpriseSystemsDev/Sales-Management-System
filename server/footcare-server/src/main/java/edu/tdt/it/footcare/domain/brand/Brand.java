package edu.tdt.it.footcare.domain.brand;

import edu.tdt.it.footcare.domain.product.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"name"}))
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany(mappedBy = "brand", cascade = CascadeType.MERGE)
    private List<Product> products;

    @ElementCollection
    private List<String> images;

}
