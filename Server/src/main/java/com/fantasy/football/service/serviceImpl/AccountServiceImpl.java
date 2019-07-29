package com.fantasy.football.service.serviceImpl;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasy.football.cache.CachingService;
import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.repository.AccountRepository;
import com.fantasy.football.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {
	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private CachingService cacheingService;
	
	@Override
	@Transactional
	public Account findAccount(String name) {
			cacheingService.updateCurrentUser(name);
			Account thisAccount = new Account();
		if (this.accountRepository.existsByName(name)) {
			thisAccount = this.accountRepository.findByName(name);
			return thisAccount;
		} else {
			thisAccount = new Account(name);		
			return this.accountRepository.save(thisAccount);
		}
	}




}
