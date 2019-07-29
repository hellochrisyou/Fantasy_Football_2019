package com.fantasy.football.domain.player;

public class Qb {
	private int fantasyPoints;
	private int fumble;
	private int interception;
	private String name;
	private int passingTD;
	private int passingYard;
	private int rushingTD;
	private int rushingYard;
	private int sack;

	public void calculateFantasyPoints() {
		this.fantasyPoints = ((((this.passingTD * 4) + (this.passingYard / 25)) - (this.interception * 2))
				+ (this.rushingYard / 10) + (this.rushingTD * 6)) - (this.fumble * 2);
	}

	public int getFantasyPoints() {
		return fantasyPoints;
	}

	public void setFantasyPoints(int fantasyPoints) {
		this.fantasyPoints = fantasyPoints;
	}

	public int getFumble() {
		return fumble;
	}

	public void setFumble(int fumble) {
		this.fumble = fumble;
	}

	public int getInterception() {
		return interception;
	}

	public void setInterception(int interception) {
		this.interception = interception;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPassingTD() {
		return passingTD;
	}

	public void setPassingTD(int passingTD) {
		this.passingTD = passingTD;
	}

	public int getPassingYard() {
		return passingYard;
	}

	public void setPassingYard(int passingYard) {
		this.passingYard = passingYard;
	}

	public int getRushingTD() {
		return rushingTD;
	}

	public void setRushingTD(int rushingTD) {
		this.rushingTD = rushingTD;
	}

	public int getRushingYard() {
		return rushingYard;
	}

	public void setRushingYard(int rushingYard) {
		this.rushingYard = rushingYard;
	}

	public int getSack() {
		return sack;
	}

	public void setSack(int sack) {
		this.sack = sack;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fantasyPoints;
		result = prime * result + fumble;
		result = prime * result + interception;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + passingTD;
		result = prime * result + passingYard;
		result = prime * result + rushingTD;
		result = prime * result + rushingYard;
		result = prime * result + sack;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Qb))
			return false;
		Qb other = (Qb) obj;
		if (fantasyPoints != other.fantasyPoints)
			return false;
		if (fumble != other.fumble)
			return false;
		if (interception != other.interception)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (passingTD != other.passingTD)
			return false;
		if (passingYard != other.passingYard)
			return false;
		if (rushingTD != other.rushingTD)
			return false;
		if (rushingYard != other.rushingYard)
			return false;
		if (sack != other.sack)
			return false;
		return true;
	}
	
}
