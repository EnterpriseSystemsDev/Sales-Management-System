package edu.tdt.it.footcare.payload;

import lombok.Data;

import java.time.Instant;
import java.util.List;
import java.util.Set;

@Data
public class ReportResponse {
    private Instant start;
    private Instant end;
    private String store;
    private double totalRevenue;
    private int totalProductSoldCount;
    private String bestSellerVersionName;
    private Set<EmployeeStatisticResponse> employeeStatistics;
    private String message;
}
