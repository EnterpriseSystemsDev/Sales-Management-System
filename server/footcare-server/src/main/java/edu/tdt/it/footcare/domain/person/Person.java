package edu.tdt.it.footcare.domain.person;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;

@MappedSuperclass
@Getter
@Setter
public abstract class Person {

    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private Account account;

    private String name;

    private String phone;

    private String address;
}