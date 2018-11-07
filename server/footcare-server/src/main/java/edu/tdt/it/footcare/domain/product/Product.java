package edu.tdt.it.footcare.domain.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.config.audit.DateAudit;
import edu.tdt.it.footcare.domain.brand.Brand;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(of = "id", callSuper = false)
public class Product extends DateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String description;
    private double price;
    private boolean hot = false;
    private boolean onSaleOff = false;
    private boolean available = true;

    @JsonIgnore
    @ManyToOne(optional = false, cascade = CascadeType.MERGE)
    private Brand brand;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> images;
}
