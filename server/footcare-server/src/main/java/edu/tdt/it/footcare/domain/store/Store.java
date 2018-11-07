package edu.tdt.it.footcare.domain.store;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.domain.person.Manager;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String address;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    private Manager manager;
}

