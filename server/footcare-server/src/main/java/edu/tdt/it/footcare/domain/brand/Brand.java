package edu.tdt.it.footcare.domain.brand;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @OneToMany(mappedBy = "brand", cascade = CascadeType.MERGE)
    private List<Product> products;

    @JsonIgnore
    @ElementCollection
    private List<String> images;

}
