package edu.tdt.it.footcare.domain.person;

import edu.tdt.it.footcare.config.security.authentication.role.RoleName;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.exception.AppException;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;

@MappedSuperclass
@Getter
@Setter
public abstract class Person {

    public Person() {
    }

    @OneToOne
    private Account account;

    private String name;

    private long phone;

    private String address;
}