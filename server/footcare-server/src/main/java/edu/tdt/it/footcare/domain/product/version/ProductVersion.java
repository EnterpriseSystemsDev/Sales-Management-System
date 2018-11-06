package edu.tdt.it.footcare.domain.product.version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.config.audit.DateAudit;
import edu.tdt.it.footcare.domain.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(of = "id", callSuper = false)
public class ProductVersion extends DateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String versionName;
    private String description;
    private double price;
//    private double currentPrice;
    private boolean hot = false;
    private boolean onSaleOff = false;
    private boolean available = true;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> images;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.MERGE)
    private Product product;
}
