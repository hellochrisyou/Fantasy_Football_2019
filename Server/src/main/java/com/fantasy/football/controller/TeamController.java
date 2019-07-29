package com.fantasy.football.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantasy.football.domain.Dto;
import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.domain.entity.League;
import com.fantasy.football.service.TeamService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/team")
public class TeamController {
	
	@Autowired
	private TeamService teamService;
	
	@CrossOrigin
	@PostMapping(value = "/createTeam/", consumes = "application/json", produces = "application/json")
	public Account createTeam(@RequestBody Dto dto) {
		return teamService.createTeam(dto);
	}	
	
	@CrossOrigin
	@PutMapping(value = "/addPlayer/", consumes = "application/json", produces = "application/json")
	public League addPlayer(@RequestBody Dto dto) {
		return teamService.addPlayer(dto);
	}	

	@CrossOrigin
	@PutMapping(value = "/addWaiver/", consumes = "application/json", produces = "application/json")
	public Account addWaiver(@RequestBody Dto dto) {
		return teamService.addWaiver(dto);
	}	
	
	@CrossOrigin
	@PutMapping(value = "/togglePlayer/", consumes = "application/json", produces = "application/json")
	public Account togglePlayer(@RequestBody Dto dto) {
		return teamService.togglePlayer(dto);
	}	
	
	@CrossOrigin
	@PutMapping(value = "/tradeTeam/", consumes = "application/json", produces = "application/json")
	public Account tradeTeam(@RequestBody Dto dto) {
		return teamService.tradeTeam(dto);
	}	
}


