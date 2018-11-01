package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.JwtTokenProvider;
import edu.tdt.it.footcare.config.security.authentication.role.RoleName;
import edu.tdt.it.footcare.config.security.authentication.role.RoleRepository;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.config.security.authentication.user.AccountRepository;
import edu.tdt.it.footcare.domain.person.Person;
import edu.tdt.it.footcare.domain.person.PersonService;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.ApiResponse;
import edu.tdt.it.footcare.payload.JwtAuthResponse;
import edu.tdt.it.footcare.payload.LoginRequest;
import edu.tdt.it.footcare.payload.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AccountRepository accountRepository;
    private final RoleRepository roleRepository;
    private final PersonService personService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthResponse(jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@Valid @RequestBody RegisterRequest request,
                                              @RequestHeader("Account-Role") String roleName) {
        if (accountRepository.existsByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body("Username da bi trung");
        }
        if (accountRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email da duoc dang ky");
        }

        Account raw = new Account();
        raw.setUsername(request.getUsername());
        raw.setEmail(request.getEmail());
        raw.setPassword(passwordEncoder.encode(request.getPassword()));
        raw.setRoles(Collections.singletonList(
                roleRepository.findByName(RoleName.valueOf(roleName))
                        .orElseThrow(() -> new AppException("Role khong ton tai"))
        ));

        Account savedAccount = accountRepository.save(raw);

        Person person = personService.createPersonWith(savedAccount, RoleName.valueOf(roleName));
        person.setPhone(Long.parseLong(request.getPhoneNumber()));
        person.setName(request.getName());
        person.setAddress(request.getAddress());
        person = personService.save(person, RoleName.valueOf(roleName));

        URI location = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/users/{username}")
                .buildAndExpand(savedAccount.getUsername())
                .toUri();
        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Dang ky thanh cong"));
    }

}
