package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.config.security.authentication.role.RoleName;
import edu.tdt.it.footcare.config.security.authentication.role.RoleRepository;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.config.security.authentication.user.AccountRepository;
import edu.tdt.it.footcare.domain.person.*;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.auth.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service

public class AuthService {

    private PasswordEncoder passwordEncoder;
    private RoleRepository roleRepository;
    private AccountRepository accountRepository;
    private EmployeeRepository employeeRepository;
    private CustomerRepository customerRepository;
    private ManagerRepository managerRepository;

    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Autowired
    public void setAccountRepository(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Autowired
    public void setEmployeeRepository(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Autowired
    public void setCustomerRepository(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Autowired
    public void setManagerRepository(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    public Account register(RegisterRequest request, String roleName) {
        if (accountRepository.existsByEmail(request.getEmail())) {
            throw new AppException("Username da duoc su dung");
        }
        if (accountRepository.existsByUsername(request.getUsername())) {
            throw new AppException("Email da duoc su dung");
        }
        Account account = new Account();
        account.setUsername(request.getUsername());
        account.setEmail(request.getEmail());
        account.setPassword(passwordEncoder.encode(request.getPassword()));
        account.setRoles(Collections.singleton(
                roleRepository.findByName(RoleName.valueOf(roleName))
                        .orElseThrow(() -> new AppException("Role khong ton tai"))
        ));
        account = accountRepository.save(account);
        return account;
    }

    public Person createPerson(Account savedAccount, RoleName roleName) {
        Person person = null;
        switch (roleName) {
            case ROLE_MANAGER:
                person = new Manager();
                break;
            case ROLE_CUSTOMER:
                person = new Customer();
                break;
            case ROLE_EMPLOYEE:
                person = new Employee();
                break;
            default:
                throw new AppException("Role khong ton tai");
        }

        person.setAccount(savedAccount);
        return person;
    }

    public Person save(Person person, RoleName roleName) {
        switch (roleName) {
            case ROLE_EMPLOYEE:
                person = employeeRepository.save((Employee) person);
                break;
            case ROLE_CUSTOMER:
                person = customerRepository.save((Customer) person);
                break;
            case ROLE_MANAGER:
                person = managerRepository.save((Manager) person);
                break;
        }
        return person;
    }
}
