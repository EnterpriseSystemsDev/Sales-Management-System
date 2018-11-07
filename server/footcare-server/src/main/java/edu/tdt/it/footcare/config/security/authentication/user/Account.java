package edu.tdt.it.footcare.config.security.authentication.user;

import edu.tdt.it.footcare.config.security.authentication.role.Role;
import lombok.Data;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    @NotBlank
    protected String username;

    @NotBlank
    protected String password;

    @NotBlank
    @Email
    @NaturalId
    protected String email;

    @ManyToMany
    @JoinTable(
            name = "account_role",
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    protected Set<Role> roles = new HashSet<>();

    public Account() {
    }
}


