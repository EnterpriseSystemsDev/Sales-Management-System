package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.bill.Bill;
import edu.tdt.it.footcare.domain.bill.BillRepository;
import edu.tdt.it.footcare.domain.person.Employee;
import edu.tdt.it.footcare.domain.store.Store;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.EmployeeStatisticResponse;
import edu.tdt.it.footcare.payload.ReportResponse;
import edu.tdt.it.footcare.payload.product.ProductWrapperResponse;
import edu.tdt.it.footcare.util.AppConstants;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Setter(onMethod = @__(@Autowired))
public class ManagerService {
    private BillRepository billRepository;
    private ProductWrapperService productWrapperService;
    private EmployeeService employeeService;

    private Set<Bill> getBillsIn(Store store, Instant startDate, Instant endDate) {
        return billRepository.findBillsIn(store, startDate, endDate);
    }

    public Set<Bill> filterByEmployee(List<Bill> bills, long eId) {
        return bills.stream().filter(bill -> bill.getCreatedBy() == eId).collect(Collectors.toSet());
    }

    private Set<ProductWrapperResponse> equalsReducer(Set<ProductWrapperResponse> l1, Set<ProductWrapperResponse> l2) {
        Set<ProductWrapperResponse> set = new HashSet<>();
        l1.forEach(p1 -> l2.forEach(p2 -> {
            if (p1.getName().equals(p2.getName())) {
                ProductWrapperResponse res = ProductWrapperResponse.reduce(p1, p2);
                set.add(res);
                System.out.println("Co san pham trung nhau");
            }
        }));
        System.out.println("Danh sach trung nhau co " + set.size());
        return set.isEmpty() ? concatSets(l1, l2) : set;
    }

    private Set<ProductWrapperResponse> concatSets(Set<ProductWrapperResponse> l1, Set<ProductWrapperResponse> l2) {
        return Stream.concat(l1.stream(), l2.stream()).collect(Collectors.toSet());
    }

    public ProductWrapperResponse bestSeller(Set<Bill> bills) {
        Optional<ProductWrapperResponse> max = bills.stream()
                .map(bill -> productWrapperService.mapWrapperToResponse(bill.getProducts()))
                .reduce(this::equalsReducer).orElseThrow(() -> new AppException("Co loi xay ra"))
                .stream().max(Comparator.comparingInt(ProductWrapperResponse::getCount));
        return max.orElseThrow(() -> new AppException("Khong co san pham ban chay nhat"));
    }

    public double revenueOf(Set<Bill> bills) {
        return bills.stream().map(Bill::getTotalMoney).reduce(Double::sum).orElse(0.0);
    }

    public int productCountOf(Set<Bill> bills) {
        return bills.stream().map(bill -> bill.getProducts().size()).reduce(Integer::sum).orElse(0);
    }

    private EmployeeStatisticResponse mapBillsToResponse(Set<Bill> bills, String eName) {
        EmployeeStatisticResponse response = new EmployeeStatisticResponse();
        response.setEmployeeName(eName);
        response.setBillsCount(bills.size());
        response.setRevenueMade(revenueOf(bills));
        response.setSoldProductsCount(productCountOf(bills));
        return response;
    }

    private Set<EmployeeStatisticResponse> statisticsOf(Set<Employee> employees, Instant start, Instant end) {
        return employees.stream()
                .map(e -> mapBillsToResponse(employeeService
                        .getBillsByEmployeeIn(e.getStore(), e.getAccount().getId(), start, end), e.getName()))
                .collect(Collectors.toSet());
    }

    private Instant calculateStartDate(LocalDate date) {
        return date.withDayOfMonth(1).atStartOfDay(ZoneId.of(AppConstants.TIME_ZONE)).toInstant();
    }

    private Instant calculateEndDate(LocalDate date) {
        return date.atStartOfDay(ZoneId.of(AppConstants.TIME_ZONE)).toInstant();
    }

    public ReportResponse doReport(Store store, LocalDate date) {
        ReportResponse response = new ReportResponse();
        Instant startDate = calculateStartDate(date);
        Instant endDate = calculateEndDate(date);

        Set<Bill> billsMade = this.getBillsIn(store, startDate, endDate);
        response.setStore(store.getAddress());
        response.setStart(startDate);
        response.setEnd(endDate);

        if (billsMade.isEmpty()) {
            response.setMessage("Thang nay khong ban duoc san pham nao");
            return response;
        }

        response.setTotalProductSoldCount(productCountOf(billsMade));
        response.setTotalRevenue(revenueOf(billsMade));
        response.setEmployeeStatistics(statisticsOf(employeeService.findByStoreId(store.getId()), startDate, endDate));
        response.setBestSellerVersionName(bestSeller(billsMade).getName());
        return response;
    }
}
