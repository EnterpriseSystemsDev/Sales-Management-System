package edu.tdt.it.footcare.domain.person;

import edu.tdt.it.footcare.config.security.authentication.role.RoleName;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.exception.AppException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PersonService {

    private final CustomerRepository customerRepository;
    private final EmployeeRepository employeeRepository;
    private final ManagerRepository managerRepository;

    public Person createPersonWith(Account savedAccount, RoleName roleName) {
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
