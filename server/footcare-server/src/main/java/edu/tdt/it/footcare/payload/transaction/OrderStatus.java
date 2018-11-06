package edu.tdt.it.footcare.payload.transaction;

import lombok.Data;

@Data
public class OrderStatus {

    private boolean success;

    private String message;
}
