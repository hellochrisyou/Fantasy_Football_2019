package com.fantasy.football.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.service.AccountService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@CrossOrigin
	@GetMapping(value = "/findAccount/{name}", consumes = "application/json", produces = "application/json")
	public Account findAccount(@PathVariable String name) {
		return accountService.findAccount(name);
	}
}
