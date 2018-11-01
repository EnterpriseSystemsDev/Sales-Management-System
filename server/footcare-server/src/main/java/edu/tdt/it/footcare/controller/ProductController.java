package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.CurrentUser;
import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.product.Product;
import edu.tdt.it.footcare.util.AppConstants;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transactions")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @PostMapping("/buy")
    public ResponseEntity<?> getAllProducts(@CurrentUser UserPrincipal currentUser,
                                            @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                            @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return ResponseEntity.ok(currentUser);
    }

}
