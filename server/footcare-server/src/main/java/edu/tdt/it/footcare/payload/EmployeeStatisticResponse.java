package edu.tdt.it.footcare.payload;

import lombok.Data;

@Data
public class EmployeeStatisticResponse {
    private String employeeName;
    private int billsCount;
    private int soldProductsCount;
    private double revenueMade;
}
