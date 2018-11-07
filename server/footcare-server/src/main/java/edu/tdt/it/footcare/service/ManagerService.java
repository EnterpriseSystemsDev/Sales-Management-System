package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.bill.Bill;
import edu.tdt.it.footcare.domain.bill.BillRepository;
import edu.tdt.it.footcare.domain.person.Employee;
import edu.tdt.it.footcare.domain.store.Store;
import edu.tdt.it.footcare.domain.store.StoreRepository;
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
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Setter(onMethod = @__(@Autowired))
public class ManagerService {
    private BillRepository billRepository;
    private ProductWrapperService productWrapperService;
    private EmployeeService employeeService;

    private List<Bill> getBillsOfMonth(Store store, Instant startDate, Instant endDate) {
        return billRepository.findBills(store, startDate, endDate);
    }

    public List<Bill> filterByEmployee(List<Bill> bills, long eId) {
        return bills.stream().filter(bill -> bill.getCreatedBy() == eId).collect(Collectors.toList());
    }

    private List<ProductWrapperResponse> equalsReducer(List<ProductWrapperResponse> l1, List<ProductWrapperResponse> l2) {
        List<ProductWrapperResponse> list = new ArrayList<>();
        l1.forEach(p1 -> l2.forEach(p2 -> {
            if (p1.getName().equals(p2.getName())) {
                ProductWrapperResponse res = ProductWrapperResponse.reduce(p1, p2);
                list.add(res);
                System.out.println("Co san pham trung nhau");
            }
        }));
        System.out.println("Danh sach trung nhau co " + list.size());
        return list.isEmpty() ? concatLists(l1, l2) : list;
    }

    private List<ProductWrapperResponse> concatLists(List<ProductWrapperResponse> l1, List<ProductWrapperResponse> l2) {
        return Stream.concat(l1.stream(), l2.stream()).collect(Collectors.toList());
    }

    public ProductWrapperResponse bestSeller(List<Bill> bills) {
        Optional<ProductWrapperResponse> max = bills.stream()
                .map(bill -> productWrapperService.mapWrapperToResponse(bill.getProducts()))
                .reduce(this::equalsReducer).orElseThrow(() -> new AppException("Co loi xay ra"))
                .stream().max(Comparator.comparingInt(ProductWrapperResponse::getCount));
        return max.orElseThrow(() -> new AppException("Khong co san pham ban chay nhat"));
    }

    public double revenueOf(List<Bill> bills) {
        return bills.stream().map(Bill::getTotalMoney).reduce(Double::sum).orElse(0.0);
    }

    public int productCountOf(List<Bill> bills) {
        return bills.stream().map(bill -> bill.getProducts().size()).reduce(Integer::sum).orElse(0);
    }

    private EmployeeStatisticResponse mapBillsToResponse(List<Bill> bills, String eName) {
        EmployeeStatisticResponse response = new EmployeeStatisticResponse();
        response.setEmployeeName(eName);
        response.setBillsCount(bills.size());
        response.setRevenueMade(revenueOf(bills));
        response.setSoldProductsCount(productCountOf(bills));
        return response;
    }

    private List<EmployeeStatisticResponse> statisticsOf(List<Employee> employees, Instant start, Instant end) {
        return employees.stream()
                .map(e -> mapBillsToResponse(employeeService
                        .getBillsByEmployeeIn(e.getStore(), e.getAccount().getId(), start, end), e.getName()))
                .collect(Collectors.toList());
    }

    private Instant calculateStartDate(LocalDate date) {
        return date.withDayOfMonth(1).atStartOfDay(ZoneId.of(AppConstants.TIME_ZONE)).toInstant();
    }

    private Instant calculateEndDate(LocalDate date) {
        return (date.compareTo(LocalDate.now()) >= 0) ?
                LocalDate.now().atStartOfDay(ZoneId.of(AppConstants.TIME_ZONE)).toInstant() :
                date.atStartOfDay(ZoneId.of(AppConstants.TIME_ZONE)).toInstant();
    }

    public ReportResponse doReport(Store store, LocalDate date) {
        ReportResponse response = new ReportResponse();
        Instant startDate = calculateStartDate(date);
        Instant endDate = calculateEndDate(date);

        List<Bill> billsMade = this.getBillsOfMonth(store, startDate, endDate);
        if (billsMade.isEmpty()) {
            response.setMessage("Thang nay khong ban duoc san pham nao");
            return response;
        }
        response.setStore(store.getAddress());
        response.setStart(startDate);
        response.setEnd(endDate);
        response.setTotalProductSoldCount(productCountOf(billsMade));
        response.setTotalRevenue(revenueOf(billsMade));
        response.setEmployeeStatistics(statisticsOf(employeeService.findByStoreId(store.getId()), startDate, endDate));
        response.setBestSellerVersionName(bestSeller(billsMade).getName());
        return response;
    }
}
