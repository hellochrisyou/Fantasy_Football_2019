package com.fantasy.football.cache;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.repository.AccountRepository;

@Service
@CacheConfig(cacheNames={"user"})
public class CachingService {
	@Autowired
	private AccountRepository accountRepository;
	
	private String userName = "default";
	
	@Cacheable
	public Account returnCurrentUser() {
		if (this.accountRepository.existsByName(userName)) {
		return this.accountRepository.findByName(userName);
		} else {		
		return null;
		}
	}
	
	@CachePut
	public String updateCurrentUser(String currentName) {
		this.userName = currentName;
		return this.userName;
	}
}
