package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.CurrentUser;
import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.cart.Cart;
import edu.tdt.it.footcare.payload.transaction.AddToCartRequest;
import edu.tdt.it.footcare.payload.transaction.CartResponse;
import edu.tdt.it.footcare.service.CartService;
import edu.tdt.it.footcare.service.ProductService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/cart")
@Setter(onMethod = @__(@Autowired))
public class CartController {

    private CartService cartService;
    private ProductService productService;

    @GetMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> getCart(@CurrentUser UserPrincipal currentUser) {
        Cart cart = cartService.getCart(currentUser);
        CartResponse response = cartService.createCartResponse(cart);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> addProductToCart(@CurrentUser UserPrincipal currentUser,
                                              @Valid @RequestBody AddToCartRequest request) {
        if (!productService.existById(request.getProductId())) {
            return ResponseEntity.badRequest().body("Khong ton tai san pham");
        }
        Cart cart = cartService.getCart(currentUser);
        cart = cartService.addProduct(cart, request);
        CartResponse cartResponse = cartService.createCartResponse(cart);
        return ResponseEntity.ok(cartResponse);
    }

}
