package edu.tdt.it.footcare.service;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;
import edu.tdt.it.footcare.domain.store.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoreService {
    private StoreRepository storeRepository;

    @Autowired
    public void setStoreRepository(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public boolean isInStock(ProductVersion productVersion, int count) {

        return false;
    }
}
