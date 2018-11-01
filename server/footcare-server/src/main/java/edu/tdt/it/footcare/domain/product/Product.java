package edu.tdt.it.footcare.domain.product;

import edu.tdt.it.footcare.domain.brand.Brand;
import edu.tdt.it.footcare.domain.product.type.ProductType;
import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String description;

    @ManyToOne
    private Brand brand;

    @OneToMany(mappedBy = "product")
    private List<ProductVersion> versions;

    @ManyToOne
    private ProductType type;

}
