package edu.tdt.it.footcare.domain.product.wrapper;

import edu.tdt.it.footcare.domain.product.version.ProductVersion;

import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class ProductWrapper {

    @ManyToOne
    protected ProductVersion productVersion;

    protected int size;

    protected int count;

    protected String image;

}
