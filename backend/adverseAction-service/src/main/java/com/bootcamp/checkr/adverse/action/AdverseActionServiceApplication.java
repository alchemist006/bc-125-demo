package com.bootcamp.checkr.adverse.action;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AdverseActionServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdverseActionServiceApplication.class, args);
	}

}
