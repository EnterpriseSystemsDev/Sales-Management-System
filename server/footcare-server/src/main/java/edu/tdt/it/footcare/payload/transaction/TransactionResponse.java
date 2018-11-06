package edu.tdt.it.footcare.payload.transaction;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;

@Data
@EqualsAndHashCode(callSuper = false)
public class TransactionResponse extends CartResponse {

    private Long id;

    private Instant createdAt;

}
