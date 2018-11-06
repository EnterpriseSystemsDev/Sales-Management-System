package edu.tdt.it.footcare.domain.bill;

import edu.tdt.it.footcare.domain.store.Store;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;

public interface BillRepository extends CrudRepository<Bill, Long> {

    @Query("select b from Bill b " +
            "where b.store = :store " +
            "and b.createdAt >= :startDate " +
            "and b.createdAt <= :endDate")
    List<Bill> findBills(@Param("store") Store store,
                         @Param("startDate") Instant startDate,
                         @Param("endDate") Instant endDate);

    @Query("select b from Bill b " +
            "where b.store = :store " +
            "and b.createdAt >= :startDate " +
            "and b.createdAt <= :endDate " +
            "and b.createdBy = :employeeId")
    List<Bill> findBillsOf(@Param("store") Store store,
                           @Param("startDate") Instant startDate,
                           @Param("endDate") Instant endDate,
                           @Param("employeeId") long employeeId);

}
