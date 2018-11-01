package edu.tdt.it.footcare.domain.product.version;

import edu.tdt.it.footcare.domain.product.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class ProductVersion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String versionName;

    private double price;

    private LocalDate releaseDate;

    private boolean isAvailable;

    private String description;

    @ManyToOne
    private Product product;
}
