package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.config.security.authentication.user.AccountRepository;
import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountDetailsService implements UserDetailsService {

    private AccountRepository repository;

    @Autowired
    public void setRepository(AccountRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameOrEmail)
            throws UsernameNotFoundException {
        Account account = repository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException("Account not found with username or email : " + usernameOrEmail));
        return UserPrincipal.create(account);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        Account account = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Account", "id", id)
        );
        return UserPrincipal.create(account);
    }
}
