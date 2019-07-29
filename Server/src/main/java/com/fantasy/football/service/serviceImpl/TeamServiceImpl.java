package com.fantasy.football.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasy.football.domain.Dto;
import com.fantasy.football.domain.Roster;
import com.fantasy.football.domain.entity.Account;
import com.fantasy.football.domain.entity.League;
import com.fantasy.football.domain.entity.Player;
import com.fantasy.football.domain.entity.Team;
import com.fantasy.football.repository.AccountRepository;
import com.fantasy.football.repository.LeagueRepository;
import com.fantasy.football.repository.PlayerRepository;
import com.fantasy.football.service.TeamService;

@Service
public class TeamServiceImpl implements TeamService {
	@Autowired
	private LeagueRepository leagueRepository;
	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private PlayerRepository playerRepository;
	
	@Override
	@Transactional
	public Account createTeam(Dto dto) {
		Team newTeam = new Team();
		
		Account firstAccount = this.accountRepository.findByName(dto.getMyAccountName());
 		League newLeague = this.leagueRepository.findByName(dto.getMyLeagueName());
		
 		// Set Team properties
 		int leagueCount = newLeague.getCount();
 		newLeague.setCount(leagueCount + 1);
 		newTeam.setName(dto.getMyTeamName());
		newTeam.setHelmet(dto.getMyTeamHelmet());
		newTeam.setMatchup_id(leagueCount);
		newTeam.setDraft_position(leagueCount);
		if (leagueCount == 10) {
			newTeam.setMatchup(1);
			newLeague.setStatus("Draft");
		} else {
			newTeam.setMatchup(leagueCount+1);
		}
		// Add and set League first. Then save Account
		firstAccount.addLeague(newLeague);
		newLeague.addAccount(firstAccount);
		Account persistedAccount = this.accountRepository.save(firstAccount);		
		
		// Add and set Team next to Account/League-Team and Account-Team		
		persistedAccount.getLeague(dto.getMyLeagueName()).addTeam(newTeam);
		newTeam.setLeague(persistedAccount.getLeague(dto.getMyLeagueName()));		
		
		persistedAccount.addTeam(newTeam);
		newTeam.setAccount(persistedAccount);
		
		return this.accountRepository.save(persistedAccount);
	}

	@Override
	@Transactional
	public League addPlayer(Dto dto) {
		League repoLeague = new League();
		Player newPlayer = new Player(dto.getPlayer1());
		
		repoLeague = this.leagueRepository.findByName(dto.getMyLeagueName());
		Roster roster = new Roster(repoLeague.getTeam(dto.getMyTeamName()).getPlayers());
		
		if (roster.checkPosition(newPlayer.getPosition())) {
			newPlayer.setActive(true);
		} else {
			newPlayer.setActive(false);
		}		
		 
		repoLeague.getTeam(dto.getMyTeamName()).addPlayer(newPlayer);	
		newPlayer.addTeam(repoLeague.getTeam(dto.getMyTeamName()));		
		
		if (repoLeague.getDraft_order() == 10 && repoLeague.getTeam(dto.getMyTeamName()).getPlayers().size() == 16) {
			repoLeague.setStatus("Ongoing");
		} else { 
			repoLeague.setDraft_order(repoLeague.getDraft_order()+1);
		}		
		
		
		
		
		return this.leagueRepository.save(repoLeague);
	}
	
	@Override
	public Account addWaiver(Dto dto) {
		Account myRepoAccount = new Account();
		Player waiverPlayer = new Player();
		Player oldPlayer = new Player();
		
		waiverPlayer = dto.getPlayer1();
		myRepoAccount = this.accountRepository.findByName(dto.getMyAccountName());				
		
		oldPlayer = myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()).getPlayer(dto.getPlayer2().getName());		
		myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()).removePlayer(oldPlayer);
		
		myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()).addPlayer(waiverPlayer);
		waiverPlayer.addTeam(myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()));
		
		this.playerRepository.delete(oldPlayer);
		return this.accountRepository.save(myRepoAccount);
	}
	
	@Override
	@Transactional
	public Account togglePlayer(Dto dto) {
		Account myRepoAccount = new Account();
		myRepoAccount = this.accountRepository.findByName(dto.getMyAccountName());				
		myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()).getPlayer(dto.getPlayer1().getName()).toggleActive();
		myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()).getPlayer(dto.getPlayer2().getName()).toggleActive();
		return this.accountRepository.save(myRepoAccount);
	}
	
	@Override
	@Transactional
	public Account tradeTeam(Dto dto) {
		Account myRepoAccount = new Account();
		League myRepoLeague = new League();
		List<Account> allAccounts = new ArrayList<Account>();
		
		myRepoAccount = this.accountRepository.findByName(dto.getMyAccountName());
		myRepoLeague = this.leagueRepository.findByName(dto.getMyLeagueName());
		// Find Other Account 
		allAccounts = this.accountRepository.findAll();
		String otherAccountName = "";
		for (Account account: allAccounts) {
			for (Team team: account.getTeams()) {
				if (team.getName().equals(dto.getOtherTeamName())) {
					otherAccountName = account.getName();
					break;
				}
			}
		}		
		Account otherRepoAccount = new Account();
		otherRepoAccount = this.accountRepository.findByName(otherAccountName);
		
		// Remove Players from my team and other teammyPlayer
		Player myPlayer = new Player();
		Player otherPlayer = new Player();
		myPlayer = myRepoLeague.getTeam(dto.getMyTeamName()).getPlayer(dto.getPlayer2().getName());		
		otherPlayer = myRepoLeague.getTeam(dto.getOtherTeamName()).getPlayer(dto.getPlayer1().getName());
		
		Player myNewPlayer = new Player(dto.getPlayer1());
		Player otherNewPlayer = new Player(dto.getPlayer2());
		
		myRepoLeague.getTeam(dto.getMyTeamName()).removePlayer(myPlayer);
		myRepoLeague.getTeam(dto.getOtherTeamName()).removePlayer(otherPlayer);
		
		myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()).addPlayer(myNewPlayer);		
		myNewPlayer.addTeam(myRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getMyTeamName()));		
		otherRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getOtherTeamName()).addPlayer(otherNewPlayer);
		otherNewPlayer.addTeam(otherRepoAccount.getLeague(dto.getMyLeagueName()).getTeam(dto.getOtherTeamName()));
		
		this.accountRepository.save(otherRepoAccount);
		this.playerRepository.delete(myPlayer);
		Account returnAccount = this.accountRepository.save(myRepoAccount);		
		this.playerRepository.delete(otherPlayer);
		
		return returnAccount;		
	}
}

