package com.bootcamp.checkr.court.search.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.sql.DataSource;

@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = "com.bootcamp.checkr.court.search.entity")
@EnableJpaRepositories(basePackages = "com.bootcamp.checkr.court.search.repository")
public class CandidateServiceConfiguration {
    @Value("${spring.datasource.url}")
    private String databaseUrl;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;
    @Bean
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
                .driverClassName(driverClassName)
                .url(databaseUrl)
                .username(username)
                .password(password)
                .build();
    }

}