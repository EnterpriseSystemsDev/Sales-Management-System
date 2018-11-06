package edu.tdt.it.footcare.domain.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.domain.brand.Brand;
import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.BatchSize;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @Size
    private String description;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false, cascade = CascadeType.MERGE)
    private Brand brand;

    @JsonIgnore
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private List<ProductVersion> versions;
}
