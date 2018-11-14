package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.cart.Cart;
import edu.tdt.it.footcare.domain.cart.CartRepository;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSellingRepository;
import edu.tdt.it.footcare.payload.transaction.AddToCartRequest;
import edu.tdt.it.footcare.payload.transaction.CartResponse;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Service
@Setter(onMethod = @__(@Autowired))
public class CartService {

    private CartRepository cartRepository;
    private ProductService productService;
    private ProductWrapperService productWrapperService;
    private ProductInSellingRepository productInSellingRepository;


    public Cart getCart(UserPrincipal userPrincipal) {
        log.info("Getting user cart");
        if (cartRepository.existsByCreatedBy(userPrincipal.getId())) {
            return cartRepository.findByCreatedBy(userPrincipal.getId());
        }
        return cartRepository.save(new Cart());
    }

    private Cart save(Cart cart) {
        return cartRepository.save(cart);
    }

    private ProductInSelling saveRequestToProduct(AddToCartRequest request) {
        ProductInSelling product = new ProductInSelling();
        product.setProduct(productService.findById(request.getProductId()));
        product.setCount(request.getCount());
        product.setSize(request.getSize());
        return productInSellingRepository.save(product);
    }

    private boolean contains(Cart cart, long productId, double size) {
        return cart.getProducts().stream()
                .anyMatch(pro -> pro.getProduct().getId() == productId && pro.getSize() == size);
    }

    private void modifyQuantity(Cart cart, long productId, double size, int newCount) {
        cart.getProducts().stream()
                .filter(pro -> pro.getProduct().getId() == productId && pro.getSize() == size).findAny()
                .ifPresent(pro -> {
                    pro.setCount(newCount);
                    productInSellingRepository.save(pro);
                });
    }

    public Cart addProduct(Cart cart, AddToCartRequest request) {
        log.info("Checking if cart has the product");
        if (contains(cart, request.getProductId(), request.getSize())) {
            log.info("Cart has the product with the corresponding size, modifying quantity");
           modifyQuantity(cart, request.getProductId(), request.getSize(), request.getCount());
        } else {
            log.info("Adding product to cart");
            ProductInSelling product = saveRequestToProduct(request);
            cart.getProducts().add(product);
        }
        return save(cart);
    }

    public CartResponse createCartResponse(Cart cart) {
        log.info("Creating cart response");
        CartResponse cartResponse = new CartResponse();
        cartResponse.setProducts(productWrapperService.mapWrapperToResponse(cart.getProducts()));
        cartResponse.setTotalMoney(productWrapperService.calculateTotalMoney(cart.getProducts()));
        return cartResponse;
    }

    public Cart clearCart(Cart cart) {
        log.info("Clearing cart");
        cart.clear();
        return save(cart);
    }

    public Set<ProductInSelling> saveWrappersFromRequests(Set<AddToCartRequest> requests) {
        return requests.stream().map(this::saveRequestToProduct).collect(Collectors.toSet());
    }

}
