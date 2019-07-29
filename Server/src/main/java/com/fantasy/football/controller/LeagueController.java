package com.fantasy.football.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.domain.entity.League;
import com.fantasy.football.repository.LeagueRepository;
import com.fantasy.football.service.LeagueService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/league")
public class LeagueController {

	@Autowired
	private LeagueRepository leagueRepository;
	@Autowired
	private LeagueService leagueService;
	
	@CrossOrigin	
	@PostMapping(value = "/createLeague/", consumes = "application/json", produces = "application/json")
	public Account createLeague(@RequestBody League league) {
		return leagueService.createLeague(league);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/getAllLeagues/", method = RequestMethod.GET)
	public List<League> getAllLeagues() {
		return leagueRepository.findAll();
	}
} 



