package com.fantasy.football.service;

import com.fantasy.football.domain.Dto;
import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.domain.entity.League;

public interface TeamService {
	Account createTeam(Dto dto);
	League addPlayer(Dto dto);
	Account togglePlayer(Dto dto);
	Account addWaiver(Dto dto);
	Account tradeTeam(Dto dto);
}
