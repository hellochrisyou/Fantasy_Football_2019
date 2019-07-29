package com.fantasy.football.domain.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "team")
@Table(name = "team")
public class Team implements Serializable {

	private static final long serialVersionUID = 7540779346243793203L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Long id;

	protected String name = "Default";
	protected int wins = 0;
	protected int loss = 0;
	protected int tie = 0;
	protected int matchup = 0;
	protected int matchup_id = 0;
	protected int draft_position = 0;
	protected String helmet = "";
	
	// Relationships
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "league_id")
	@JsonIgnore
	private League league = new League();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "account_id")
	@JsonIgnore
	private Account account = new Account();
	
    @ManyToMany(cascade = {
    	    CascadeType.PERSIST,
    	    CascadeType.MERGE
    	})
    	@JoinTable(name = "team_player",
    	    joinColumns = @JoinColumn(name = "team_id"),
    	    inverseJoinColumns = @JoinColumn(name = "player_id")
    	)
    	private Set<Player> players = new HashSet<Player>();
	
	// Constructors
	public Team() {
	}

	public Team(String teamName) {
		this.name = teamName;
	}

	public Team(Set<Player> players) {
		for (Player player : players) {
			Player tmpPlayer = new Player(player);
			this.players.add(tmpPlayer);
		}
	}

	public Team(Team team) {
		this.setName(team.getName());
		this.setMatchup(team.getMatchup());
		this.setMatchup_id(team.getMatchup_id());
		this.setDraft_position(team.getDraft_position());
		this.setHelmet(this.getHelmet());
		for (Player tmpPlayer : team.getPlayers()) {
			this.players.add(tmpPlayer);
		}
	}	

	// Relationship getters and setters
	public void setPlayers(Set<Player> players) {
		this.players = players;
	}

	public Set<Player> getPlayers() {
		if (this.players == null) {
			this.players = new HashSet<>();
		}
		return this.players;
	}
	public Player getPlayer(String playerName) {
		for (Player player: this.players) {
			if (player.getName().equals(playerName)) {
				return player;
			}
		}
		return null;
	}
	
	public void addPlayer(Player player) {
        players.add(player);
        player.getTeams().add(this);
    }
 
    public void removePlayer(Player player) {
        players.remove(player);
        player.getTeams().remove(this);
    }
 
	// Basic getters and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getLoss() {
		return loss;
	}

	public void setLoss(int loss) {
		this.loss = loss;
	}

	public int getMatchup() {
		return matchup;
	}

	public void setMatchup(int matchup) {
		this.matchup = matchup;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMatchup_id() {
		return matchup_id;
	}

	public void setMatchup_id(int matchup_id) {
		this.matchup_id = matchup_id;
	}

	public int getDraft_position() {
		return draft_position;
	}

	public void setDraft_position(int draft_position) {
		this.draft_position = draft_position;
	}

	public String getHelmet() {
		return helmet;
	}

	public void setHelmet(String helmet) {
		this.helmet = helmet;
	}
	public int getTie() {
		return tie;
	}

	public void setTie(int tie) {
		this.tie = tie;
	}

	public int getWins() {
		return wins;
	}

	public void setWins(int wins) {
		this.wins = wins;
	}

    /**
	 * @return the league
	 */
	public Account getAccount() {
		return this.account;
	}

	/**
	 * @param league the league to set
	 */
	public void setAccount(Account account) {
		this.account= account;
	}

    /**
	 * @return the league
	 */
	public League getLeague() {
		return league;
	}

	/**
	 * @param league the league to set
	 */
	public void setLeague(League league) {
		this.league = league;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Team)) return false;
        return id != null && id.equals(((Team) o).getId());
    }
 
    @Override
    public int hashCode() {
        return 31;
    }

}
