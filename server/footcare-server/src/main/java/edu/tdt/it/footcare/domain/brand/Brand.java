package edu.tdt.it.footcare.domain.brand;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.domain.product.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"name"}))
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "brand", fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private Set<Product> products;

    private String image;

}
