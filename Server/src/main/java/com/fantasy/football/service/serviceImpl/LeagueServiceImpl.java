package com.fantasy.football.service.serviceImpl;


import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasy.football.cache.CachingService;
import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.domain.entity.League;
import com.fantasy.football.repository.AccountRepository;
import com.fantasy.football.repository.LeagueRepository;
import com.fantasy.football.service.LeagueService;

@Service
public class LeagueServiceImpl implements LeagueService{

	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private CachingService cacheingService;

	
	@Override
	@Transactional
	public Account createLeague(League league) {
		// Retrieve current account name via cache 
		Account myAccount = new Account();
		myAccount = this.cacheingService.returnCurrentUser();
		
		League newLeague = new League(league.getName());
		myAccount.addLeague(newLeague);
		return this.accountRepository.save(myAccount);
	}
}
