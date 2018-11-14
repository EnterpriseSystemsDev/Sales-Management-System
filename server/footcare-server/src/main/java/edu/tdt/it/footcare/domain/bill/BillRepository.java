package edu.tdt.it.footcare.domain.bill;

import edu.tdt.it.footcare.domain.store.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;
import java.util.Set;

public interface BillRepository extends JpaRepository<Bill, Long> {

    @Query("select b from Bill b " +
            "where b.store = :store " +
            "and b.createdAt >= :startDate " +
            "and b.createdAt <= :endDate")
    Set<Bill> findBillsIn(@Param("store") Store store,
                          @Param("startDate") Instant startDate,
                          @Param("endDate") Instant endDate);

    @Query("select b from Bill b " +
            "where b.store = :store " +
            "and b.createdAt >= :startDate " +
            "and b.createdAt <= :endDate " +
            "and b.createdBy = :employeeId")
    Set<Bill> findBillsOf(@Param("store") Store store,
                          @Param("startDate") Instant startDate,
                          @Param("endDate") Instant endDate,
                          @Param("employeeId") long employeeId);

    Set<Bill> findByCustomer_Account_Id(long accountId);

}
