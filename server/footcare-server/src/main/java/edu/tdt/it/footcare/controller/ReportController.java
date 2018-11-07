package edu.tdt.it.footcare.controller;

import edu.tdt.it.footcare.config.security.CurrentUser;
import edu.tdt.it.footcare.config.security.authentication.user.UserPrincipal;
import edu.tdt.it.footcare.domain.store.Store;
import edu.tdt.it.footcare.domain.store.StoreRepository;
import edu.tdt.it.footcare.exception.AppException;
import edu.tdt.it.footcare.payload.ReportResponse;
import edu.tdt.it.footcare.service.ManagerService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletRequest;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Setter(onMethod = @__(@Autowired))
@RestController
@RequestMapping("/api/report")
@PreAuthorize("hasRole('MANAGER')")
public class ReportController {
    private StoreRepository storeRepository;
    private ManagerService managerService;

    @GetMapping
    public ResponseEntity<?> doReport(ServletRequest request) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM");
        LocalDate time = request.getParameterMap().containsKey("time") ?
                YearMonth.parse(request.getParameter("time"), formatter).atEndOfMonth()
                : LocalDate.now();

        if (request.getParameterMap().containsKey("storeId")) {
            long storeId = Long.parseLong(request.getParameter("storeId"));
            Store store = storeRepository.findById(storeId).orElseThrow(() -> new AppException("Khong ton tai cua hang"));
            ReportResponse report = managerService.doReport(store, time);
            return ResponseEntity.ok(report);
        } else {
            List<ReportResponse> reports = new ArrayList<>();
            for (Store store : storeRepository.findAll()) {
                reports.add(managerService.doReport(store, time));
            }
            return ResponseEntity.ok(reports);
        }
    }
}
