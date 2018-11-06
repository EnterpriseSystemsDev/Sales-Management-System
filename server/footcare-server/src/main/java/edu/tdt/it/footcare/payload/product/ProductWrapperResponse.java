package edu.tdt.it.footcare.payload.product;

import lombok.Data;

@Data
public class ProductWrapperResponse {

    private String name;

    private int count;

    private double size;

    private double price;

    public static ProductWrapperResponse reduce(ProductWrapperResponse p1, ProductWrapperResponse p2) {
        ProductWrapperResponse p = new ProductWrapperResponse();
        p.setName(p1.getName());
        p.setCount(p1.getCount() + p2.getCount());
        return p;
    }

}
