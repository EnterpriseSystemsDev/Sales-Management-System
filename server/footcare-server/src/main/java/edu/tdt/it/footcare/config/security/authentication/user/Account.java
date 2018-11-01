package edu.tdt.it.footcare.config.security.authentication.user;

import edu.tdt.it.footcare.config.security.authentication.role.Role;
import lombok.Data;
import org.hibernate.annotations.NaturalId;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

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

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "account_role",
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    protected List<Role> roles;

    public Account() {
    }

    public Account(Account account) {
        id = account.getId();
        username = account.getUsername();
        password = account.getPassword();
        email = account.getEmail();
        roles = account.getRoles();
    }
}


