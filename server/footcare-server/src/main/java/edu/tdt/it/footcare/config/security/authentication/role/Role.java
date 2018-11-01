package edu.tdt.it.footcare.config.security.authentication.role;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(of = "name")
@Entity
@Data
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @NotBlank
    @Enumerated(EnumType.STRING)
    private RoleName name;

}
