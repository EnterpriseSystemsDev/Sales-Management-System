package edu.tdt.it.footcare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;

import java.util.Arrays;

@SpringBootApplication
public class SpringJpaWildflyApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(SpringJpaWildflyApplication.class);
    }

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringJpaWildflyApplication.class, args);
        String[] beans = context.getBeanDefinitionNames();
        System.out.println("Let's inspect the beans provided by Spring Boot:");
        Arrays.sort(beans);
        for (String beanName : beans) {
            System.out.println(beanName);
        }
    }
}
