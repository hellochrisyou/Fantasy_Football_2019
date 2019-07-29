package com.fantasy.football.domain.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity(name = "League")
@Table(name = "league")
public class League implements Serializable {
		
	private static final long serialVersionUID = -4408681528897336928L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int count = 0;
	private int draft_order = 1;
	private String name = "Default";
	private int startWeek = 1;	
	private int current_week = 1;	
	private String status = "Created";
	
	public League() {		
	}
	
	public League(String leagueName) {
		this.setName(leagueName);
	} 
	
	//Relationship
	@ManyToMany(mappedBy = "leagues")
	@JsonIgnore
	private Set<Account> accounts = new HashSet<>();	
	
	@OneToMany(mappedBy = "league", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Team> teams = new HashSet<Team>();
	
	// Relationship getters and setters
	public void addAccount(Account account) {
        accounts.add(account);
        account.getLeagues().add(this);
    }
	public void removeAccount(Account account) {
        accounts.remove(account);
        account.getLeagues().remove(this);
    }	
	public Account getAccount(String accountName) {
		for (Account account: this.accounts) {
			if (account.getName().equals(accountName)) {
				return account;
			}
		}
		return null;
	}
	public void removeAllAccounts() {
		this.accounts.clear();
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
	     localTeam.setLeague(this);
     }
	/**
	 * @param teams the teams to set
	 */
	public void setTeams(Set<Team> teams) {
		this.teams = teams;
	}

	/**
	 * @return the accounts
	 */
	public Set<Account> getAccounts() {
		return accounts;
	}

	/**
	 * @param accounts the accounts to set
	 */
	public void setAccounts(Set<Account> accounts) {
		this.accounts = accounts;
	}

	// Basic Getter and Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getStartWeek() {
		return startWeek;
	}
	public void setStartWeek(int startWeek) {
		this.startWeek = startWeek;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}

	public int getCurrent_week() {
		return current_week;
	}

	public void setCurrent_week(int current_week) {
		this.current_week = current_week;
	}

	public int getDraft_order() {
		return draft_order;
	}

	public void setDraft_order(int draft_order) {
		this.draft_order = draft_order;
	}

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        League league = (League) o;
        return Objects.equals(name, league.name);
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
	
	
}
