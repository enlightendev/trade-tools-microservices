package io.enlightendev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class TradeToolsConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TradeToolsConfigServerApplication.class, args);
	}
}
