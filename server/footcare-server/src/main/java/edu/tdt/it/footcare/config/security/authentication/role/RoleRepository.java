package edu.tdt.it.footcare.config.security.authentication.role;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
