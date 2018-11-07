package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.bill.Bill;
import edu.tdt.it.footcare.domain.bill.BillRepository;
import edu.tdt.it.footcare.domain.person.Customer;
import edu.tdt.it.footcare.domain.person.Employee;
import edu.tdt.it.footcare.domain.person.EmployeeRepository;
import edu.tdt.it.footcare.domain.store.Store;
import edu.tdt.it.footcare.domain.transaction.Transaction;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.transaction.BillResponse;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
@Setter(onMethod = @__(@Autowired))
public class EmployeeService {

    private BillRepository billRepository;
    private EmployeeRepository employeeRepository;
    private ProductWrapperService productWrapperService;
    private StockService stockService;

    public Optional<Employee> findById(long eId) {
        return employeeRepository.findById(eId);
    }

    public List<Bill> getBillsByEmployeeIn(Store store, long eAccId, Instant startDate, Instant endDate) {
        return billRepository.findBillsOf(store, startDate, endDate, eAccId);
    }

    public List<Employee> findByStoreId(long storeId) {
        return employeeRepository.findByStore_Id(storeId);
    }

    @SuppressWarnings("OptionalUsedAsFieldOrParameterType")
    public Bill makeBill(UserPrincipal currentUser, Transaction transaction, Customer customer, Optional<Double> pCustomerMoney) {
        double totalMoney = productWrapperService.calculateTotalMoney(transaction.getProducts());
        double customerMoney = pCustomerMoney.orElse(totalMoney);
        Bill bill = new Bill();
        Store store = employeeRepository
                .findByAccount_Id(currentUser.getId())
                .orElseThrow(() -> new AppException("Tai khoan khong ton tai"))
                .getStore();
        bill.setCustomer(customer);
        bill.setProducts(transaction.getProducts());
        bill.setTotalMoney(totalMoney);
        bill.setMoneyOfCustomer(customerMoney);
        bill.setChange(customerMoney - totalMoney);
        bill.setStore(store);
        stockService.notifyProductChanges(store.getId(), transaction.getProducts(), false);
        return billRepository.save(bill);
    }

    public BillResponse createBillResponse(Bill bill, String customerName) {
        BillResponse response = new BillResponse();
        response.setStoreAddress(bill.getStore().getAddress());
        response.setEmployeeName(employeeRepository
                .findByAccount_Id(bill.getCreatedBy())
                .orElseThrow(() -> new AppException("Tai khoan khong ton tai")).getName());
        response.setCustomerName(customerName);
        response.setProducts(productWrapperService.mapWrapperToResponse(bill.getProducts()));
        response.setCustomerMoney(bill.getMoneyOfCustomer());
        response.setTotalMoney(bill.getTotalMoney());
        response.setChange(bill.getChange());
        response.setCreatedAt(bill.getCreatedAt());
        response.setId(bill.getId());
        return response;
    }
}
