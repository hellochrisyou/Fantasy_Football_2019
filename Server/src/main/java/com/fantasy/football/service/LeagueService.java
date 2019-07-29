package com.fantasy.football.service;

import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.domain.entity.League;

public interface LeagueService {
	Account createLeague(League league);
}