package com.fantasy.football.domain.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity(name = "Account")
@Table(name = "account")
public class Account implements Serializable {
	
	private static final long serialVersionUID = 8187716038664503416L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name = "";		
	private boolean admin = false;
	private boolean master = false;
	
	// Constructor
	public Account() {}
	
	public Account(String accountName) {
		this.setName(accountName);
	}
	
	public Account(Account account) {
		this.setAdmin(account.isAdmin());
		this.setMaster(account.isMaster());
		this.setName(account.getName());
	}
	
	// Relationship
	@ManyToMany(cascade = {
		    CascadeType.PERSIST,
		    CascadeType.MERGE
	})
	@JoinTable(name = "account_league",
	    joinColumns = @JoinColumn(name = "account_id"),
	    inverseJoinColumns = @JoinColumn(name = "league_id")
	)
	private Set<League> leagues = new HashSet<League>();
	
	@OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Team> teams = new HashSet<Team>();
	
	// Relationship Getters and Setters
	public void addLeague(League league) {
        leagues.add(league);
        league.getAccounts().add(this);
    }
 
    public void removeLeague(League league) {
        leagues.remove(league);
        league.getAccounts().remove(this);
    }
    
    // Basic Getters and Setters
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	public boolean isMaster() {
		return master;
	}
	public void setMaster(boolean master) {
		this.master = master;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Team getTeam(String teamName) {
		for (Team team : teams) {
			if (team.getName().equals(teamName)) {
				return team;
			}
		}
		return null;
	}
	/**
	 * @return the teams
	 */ 
	public Set<Team> getTeams() {
		return teams;
	}
	public void addTeam(Team localTeam) {
		 teams.add(localTeam);
	     localTeam.setAccount(this);
	}
	public League getLeague(String leagueName) {
		for (League league : leagues) {
			if (league.getName().equals(leagueName)) {
				return league;
			}
		}
		return null;
	}
	public void setTeams(Set<Team> teams) {
		this.teams = teams;
	}
	
    
	public Set<League> getLeagues() {
		return leagues;
	}

	
	public void setLeagues(Set<League> leagues) {
		this.leagues = leagues;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Account)) return false;
        return id != null && id.equals(((Account) o).getId());
    }
 
    @Override
    public int hashCode() {
        return 31;
    }
	
	
}
