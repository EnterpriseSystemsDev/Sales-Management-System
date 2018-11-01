package edu.tdt.it.footcare.config.security.authentication.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface AccountRepository extends CrudRepository<Account, Long> {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    Optional<Account> findByEmail(String email);
    Optional<Account> findByUsername(String username);
    Optional<Account> findByUsernameOrEmail(String username, String email);
}
