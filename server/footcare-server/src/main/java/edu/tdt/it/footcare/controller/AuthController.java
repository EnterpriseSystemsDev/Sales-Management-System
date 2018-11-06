package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.JwtTokenProvider;
import edu.tdt.it.footcare.config.security.authentication.role.RoleName;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.domain.person.Person;
import edu.tdt.it.footcare.payload.ApiResponse;
import edu.tdt.it.footcare.payload.auth.JwtAuthResponse;
import edu.tdt.it.footcare.payload.auth.LoginRequest;
import edu.tdt.it.footcare.payload.auth.RegisterRequest;
import edu.tdt.it.footcare.service.AuthService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/auth")
@Setter(onMethod = @__(@Autowired))
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private AuthService authService;

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
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request,
                                      @RequestHeader("Account-Role") String roleName) {

        Account savedAccount = authService.register(request, roleName);

        Person person = authService.createPerson(savedAccount, RoleName.valueOf(roleName));
        person.setPhone(request.getPhoneNumber());
        person.setName(request.getName());
        person.setAddress(request.getAddress());
        authService.save(person, RoleName.valueOf(roleName));

        URI location = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/users/{username}")
                .buildAndExpand(savedAccount.getUsername())
                .toUri();
        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Dang ky thanh cong"));
    }

}
