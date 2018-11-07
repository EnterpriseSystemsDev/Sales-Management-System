package edu.tdt.it.footcare.domain.product.wrapper;

import edu.tdt.it.footcare.config.audit.UserDateAudit;
import edu.tdt.it.footcare.domain.product.Product;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

@EqualsAndHashCode(of = {"product", "size"}, callSuper = false)
@MappedSuperclass
@Getter
@Setter
public abstract class ProductWrapper extends UserDateAudit {

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    protected Product product;

    protected double size;

    protected int count;

}
