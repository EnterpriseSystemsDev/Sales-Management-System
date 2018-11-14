package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.config.security.authentication.role.RoleName;
import edu.tdt.it.footcare.config.security.authentication.user.Account;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.person.CustomerRepository;
import edu.tdt.it.footcare.domain.product.wrapper.ProductInSelling;
import edu.tdt.it.footcare.domain.transaction.Transaction;
import edu.tdt.it.footcare.domain.transaction.TransactionRepository;
import edu.tdt.it.footcare.domain.transaction.TransactionResult;
import edu.tdt.it.footcare.domain.transaction.TransactionType;
import edu.tdt.it.footcare.payload.transaction.OfflineBillRequest;
import edu.tdt.it.footcare.payload.transaction.TransactionResponse;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Slf4j
@Service
@Setter(onMethod = @__(@Autowired))
public class CustomerService {

    private CustomerRepository customerRepository;
    private TransactionRepository transactionRepository;
    private ProductWrapperService productWrapperService;
    private AuthService authService;

    // system do
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    // when customer go to the store
    // employee check for customer by email, phone, username
    public Customer findByKey(String key) {
        return customerRepository.findByNameOrPhoneOrAccount_EmailOrAccount_Username(key, key, key, key);
    }

    public boolean existsByKey(String key) {
        return customerRepository.existsByNameOrPhoneOrAccount_EmailOrAccount_Username(key, key, key, key);
    }

    public boolean wannaCreateAccount(OfflineBillRequest request) {
        return request.getRegisterRequest() != null;
    }

    public Optional<Customer> findByAccountId(long customerAccount) {
        return customerRepository.findByAccount_Id(customerAccount);
    }

    public Transaction makeOrder(Set<ProductInSelling> products) {
        log.info("Making order");
        Transaction transaction = new Transaction();
        log.info(products.size() + " products");
        transaction.setProducts(products);
        transaction.setTransactionType(TransactionType.ORDER);
        transaction.setTransactionResult(TransactionResult.PENDING);
        return transactionRepository.save(transaction);
    }

    public Customer getCustomerFromBillRequest(OfflineBillRequest request) {
        return existsByKey(request.getCustomerKey()) ?
                findByKey(request.getCustomerKey()) : null;
    }

    public Customer createCustomerAccountFrom(OfflineBillRequest request) {
        Customer customer = new Customer();
        Account account = authService.register(request.getRegisterRequest(), RoleName.ROLE_CUSTOMER.name());
        customer.setAccount(account);
        customer.setAddress(request.getRegisterRequest().getAddress());
        customer.setName(request.getRegisterRequest().getName());
        customer.setPhone(request.getRegisterRequest().getPhoneNumber());
        return save(customer);
    }

    public TransactionResponse createTransactionResponse(Transaction transaction) {
        log.info("Creating response");
        TransactionResponse response = new TransactionResponse();
        response.setCreatedAt(transaction.getCreatedAt());
        response.setId(transaction.getId());
        response.setProducts(productWrapperService.mapWrapperToResponse(transaction.getProducts()));
        response.setTotalMoney(productWrapperService.calculateTotalMoney(transaction.getProducts()));
        return response;
    }
}
