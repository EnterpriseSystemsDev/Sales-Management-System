package edu.tdt.it.footcare.domain.person;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = false)
@Data
@Entity
public class Manager extends Employee {
    public Manager() {
        super();
    }
}
