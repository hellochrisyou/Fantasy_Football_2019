package com.fantasy.football;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableCaching
@ComponentScan(basePackages = { "com.fantasy.football" })
@EntityScan(basePackages = "com.fantasy.football.domain")
@EnableJpaRepositories(basePackages = "com.fantasy.football.repository")
@EnableAutoConfiguration
@EnableJpaAuditing
@SpringBootApplication
public class ServerFfApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerFfApplication.class, args);
	}

}
