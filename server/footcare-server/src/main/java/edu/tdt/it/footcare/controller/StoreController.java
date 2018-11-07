package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.domain.person.EmployeeRepository;
import edu.tdt.it.footcare.domain.store.StoreRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stores")
@Setter(onMethod = @__(@Autowired))
public class StoreController {

    private StoreRepository storeRepository;
    private EmployeeRepository employeeRepository;

    @PostMapping("/addEmployee")
    public ResponseEntity<?> addNewEmployee(@PathVariable long storeId) {
        return ResponseEntity.ok().build();
    }
}
