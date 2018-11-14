package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.CurrentUser;
import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.bill.Bill;
import edu.tdt.it.footcare.domain.bill.BillRepository;
import edu.tdt.it.footcare.domain.cart.Cart;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.transaction.Transaction;
import edu.tdt.it.footcare.domain.transaction.TransactionRepository;
import edu.tdt.it.footcare.domain.transaction.TransactionResult;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.transaction.BillResponse;
import edu.tdt.it.footcare.payload.transaction.OfflineBillRequest;
import edu.tdt.it.footcare.payload.transaction.OrderStatus;
import edu.tdt.it.footcare.payload.transaction.TransactionResponse;
import edu.tdt.it.footcare.service.CartService;
import edu.tdt.it.footcare.service.CustomerService;
import edu.tdt.it.footcare.service.EmployeeService;
import edu.tdt.it.footcare.service.StockService;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/transactions")
@Setter(onMethod = @__(@Autowired))
public class TransactionController {

    private CartService cartService;
    private StockService stockService;
    private CustomerService customerService;
    private TransactionRepository transactionRepository;
    private EmployeeService employeeService;
    private BillRepository billRepository;

    @GetMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> getAllTransactions(@CurrentUser UserPrincipal userPrincipal) {
        Set<Bill> onlineBills = billRepository.findByCustomer_Account_Id(userPrincipal.getId());
        return ResponseEntity.ok(onlineBills.stream()
                .map(bill -> employeeService.createBillResponse(bill, userPrincipal.getUsername()))
                .collect(Collectors.toSet())
        );
    }

    @GetMapping("/{transactionId}")
    @PreAuthorize("hasAnyRole('CUSTOMER', 'EMPLOYEE', 'MANAGER')")
    public ResponseEntity<?> getTransaction(@PathVariable long transactionId) {
        return ResponseEntity.ok(transactionRepository.findById(transactionId).orElseThrow(() -> new AppException("Giao dich khong ton tai")));
    }

    @PostMapping("/makeOrder")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> orderProduct(@CurrentUser UserPrincipal currentUser) {
        // check if cart is empty
        Cart cart = cartService.getCart(currentUser);
        if (cart.getProducts().isEmpty()) {
            log.info("Cart is empty");
            return ResponseEntity.badRequest().body("Gio hang trong");
        }
        log.info("Cart has " + cart.getProducts().size() + " products");
        // check product is in stock
        log.info("Checking stock for product count");
        OrderStatus status = stockService.checkForOrder(cart.getProducts());
        if (!status.isSuccess()) {
            log.info("Error");
            return ResponseEntity.badRequest().body(status.getMessage());
        }
        // make an order
        Transaction transaction = customerService.makeOrder(cart.getProducts());

        TransactionResponse response = customerService.createTransactionResponse(transaction);

        log.info("After order cart has " + cart.getProducts().size() + " products");
        log.info("After order transaction has " + transaction.getProducts().size() + " products");
//         delete products in cart
        cart = cartService.clearCart(cart);
        log.info("After delete products in cart, cart has " + cart.getProducts().size() + " product(s)");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/makeBillOnline")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<?> makeBillOnline(@CurrentUser UserPrincipal currentUser, @RequestParam(name = "transactionId") long transactionId) {

        log.info("Making bill online");
        Transaction transaction = transactionRepository
                .findById(transactionId).orElseThrow(() -> new AppException("Giao dich khong ton tai"));
        log.info("Transaction info: " + transaction.getId());
        log.info("Transaction has " + transaction.getProducts().size() + " products");
        if (transaction.getTransactionResult() == TransactionResult.OKAY) {
            throw new AppException("Giao dich da duoc xuat bill");
        }

        Customer customer = customerService.findByAccountId(transaction.getCreatedBy())
                .orElseThrow(() -> new AppException("Giao dịch đã được xuất bill tại cửa hàng"));


        Bill bill = employeeService.makeBill(currentUser, transaction, customer, Optional.empty());
        log.info("Setting transaction result to OKAY and notifying product count changes in stock");
        transaction = employeeService.setTransactionResult(transaction, TransactionResult.OKAY);
        stockService.notifyProductCountChanges(bill.getStore().getId(), transaction.getProducts(), false);

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

        Set<ProductInSelling> products = cartService.saveWrappersFromRequests(request.getProducts());

        Transaction transaction = customerService.makeOrder(products);

        Bill bill = employeeService.makeBill(currentUser, transaction, customer, Optional.of(request.getCustomerMoney()));

        transaction = employeeService.setTransactionResult(transaction, TransactionResult.OKAY);
        stockService.notifyProductCountChanges(bill.getStore().getId(), transaction.getProducts(), false);

        BillResponse billResponse = employeeService.createBillResponse(bill,
                customer == null ? request.getCustomerKey() : customer.getName());

        return ResponseEntity.ok(billResponse);
    }


}
