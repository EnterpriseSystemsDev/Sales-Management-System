package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.CurrentUser;
import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.bill.Bill;
import edu.tdt.it.footcare.domain.cart.Cart;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.transaction.Transaction;
import edu.tdt.it.footcare.domain.transaction.TransactionRepository;
import edu.tdt.it.footcare.domain.transaction.TransactionResult;
import edu.tdt.it.footcare.domain.transaction.TransactionType;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.transaction.BillResponse;
import edu.tdt.it.footcare.payload.transaction.OfflineBillRequest;
import edu.tdt.it.footcare.payload.transaction.OrderStatus;
import edu.tdt.it.footcare.payload.transaction.TransactionResponse;
import edu.tdt.it.footcare.service.*;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
@Setter(onMethod = @__(@Autowired))
public class TransactionController {

    private CartService cartService;
    private StockService stockService;
    private CustomerService customerService;
    private TransactionRepository transactionRepository;
    private EmployeeService employeeService;
    private ProductWrapperService productWrapperService;

    @GetMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> getAllTransactions(@CurrentUser UserPrincipal userPrincipal) {
        List<Transaction> transactions = transactionRepository.findByCreatedBy(userPrincipal.getId());
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/{transactionId}")
    @PreAuthorize("hasAnyRole('CUSTOMER', 'EMPLOYEE', 'MANAGER')")
    public ResponseEntity<?> getTransaction(@PathVariable long transactionId) {
        if (!transactionRepository.existsById(transactionId)) {
            return ResponseEntity.badRequest().body("Giao dich khong ton tai");
        }
        return ResponseEntity.ok(transactionRepository.findById(transactionId));
    }

    @PostMapping("/makeOrder")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> orderProduct(@CurrentUser UserPrincipal currentUser) {
        // check if cart is empty
        Cart cart = cartService.getCart(currentUser);
        if (cart.getProducts().isEmpty()) {
            return ResponseEntity.badRequest().body("Gio hang trong");
        }
        // check product is in stock
        OrderStatus status = stockService.checkOrder(cart.getProducts());
        if (!status.isSuccess()) {
            return ResponseEntity.badRequest().body(status.getMessage());
        }
        // make an order and delete products in cart
        Transaction transaction = customerService.makeOrder(cart.getProducts());
        TransactionResponse response = customerService.createTransactionResponse(transaction);
        cartService.clearCart(cart);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/makeBillOnline")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> makeBillOnline(@CurrentUser UserPrincipal currentUser,
                                            @RequestParam(name = "transactionId") long transactionId) {
        if (!transactionRepository.existsById(transactionId)) {
            return ResponseEntity.badRequest().body("Giao dịch không tồn tại");
        }
        Transaction transaction = transactionRepository.findById(transactionId);
        if (transaction.getTransactionResult() == TransactionResult.OKAY) {
            throw new AppException("Giao dich da duoc xuat bill");
        }
        Customer customer = customerService.findByAccountId(transaction.getCreatedBy())
                .orElseThrow(() -> new AppException("Giao dịch đã được xuất bill tại cửa hàng"));
        Bill bill = employeeService.makeBill(currentUser, transaction, customer, Optional.empty());

        transaction.setTransactionResult(TransactionResult.OKAY);
        transactionRepository.save(transaction);
        BillResponse billResponse = employeeService.createBillResponse(bill, customer.getName());
        return ResponseEntity.ok(billResponse);
    }

    @PostMapping("/makeBill")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> makeBillOffline(@CurrentUser UserPrincipal currentUser,
                                             @Valid @RequestBody OfflineBillRequest request) {

        Customer customer = customerService.getCustomerFromBillRequest(request);
        if (customer == null && customerService.wannaCreateAccount(request)) {
            customer = customerService.createCustomerAccountFrom(request);
        }
        List<ProductInSelling> products = productWrapperService.saveWrappersFromRequests(request.getProducts());

        Transaction transaction = customerService.makeOrder(products);

        Bill bill = employeeService.makeBill(currentUser, transaction, customer, Optional.of(request.getCustomerMoney()));

        transaction.setTransactionResult(TransactionResult.OKAY);
        transactionRepository.save(transaction);

        BillResponse billResponse = employeeService.createBillResponse(bill, customer == null ? request.getCustomerKey() : customer.getName());
        return ResponseEntity.ok(billResponse);
    }


}
