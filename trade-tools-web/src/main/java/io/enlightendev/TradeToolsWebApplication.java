package io.enlightendev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class TradeToolsWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(TradeToolsWebApplication.class, args);
	}
}
