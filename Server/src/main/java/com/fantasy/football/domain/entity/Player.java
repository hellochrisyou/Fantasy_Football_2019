package com.fantasy.football.domain.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "player")
@Table(name = "player")
public class Player implements  Serializable {
	private static final long serialVersionUID = -8075696392068480911L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Long id;
	protected String name = "default";
	protected String position = "default";
	protected boolean active = false;
	protected boolean flex = false;
	protected float fantasy_points = 0;	
	
	@ManyToMany(mappedBy = "players")
	@JsonIgnore
    private Set<Team> teams = new HashSet<Team>();
	
	public Player() {};
	
	public Player(Player player) {
		this.setName(player.getName());
		this.setPosition(player.getPosition());
		this.setFantasy_points(player.getFantasy_points());
	}
	
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
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public void toggleActive() {
		this.active = !this.active;
	}
	public float getFantasy_points() {
		return fantasy_points;
	}

	public void setFantasy_points(float fantasy_points) {
		this.fantasy_points = fantasy_points;
	}

	public boolean isFlex() {
		return flex;
	}
	public void setFlex(boolean flex) {
		this.flex = flex;
	}
	

    /**
	 * @return the teams
	 */
	public Set<Team> getTeams() {
		return teams;
	}

	/**
	 * @param teams the teams to set
	 */
	public void setTeams(Set<Team> teams) {
		this.teams = teams;
	}

	public void addTeam(Team team) {
        teams.add(team);
        team.getPlayers().add(this);
    }
 
    public void removeTeam(Team team) {
        teams.remove(team);
        team.getPlayers().remove(this);
    }

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (active ? 1231 : 1237);
		result = prime * result + Float.floatToIntBits(fantasy_points);
		result = prime * result + (flex ? 1231 : 1237);
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((position == null) ? 0 : position.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Player))
			return false;
		Player other = (Player) obj;
		if (active != other.active)
			return false;
		if (Float.floatToIntBits(fantasy_points) != Float.floatToIntBits(other.fantasy_points))
			return false;
		if (flex != other.flex)
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (position == null) {
			if (other.position != null)
				return false;
		} else if (!position.equals(other.position))
			return false;
		return true;
	}
	
	
}
