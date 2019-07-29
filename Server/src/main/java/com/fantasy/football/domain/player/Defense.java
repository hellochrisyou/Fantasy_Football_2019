package com.fantasy.football.domain.player;

public class Defense {
	private int fantasyPoints = 0;
	private int fumblesRecovered = 0;
	private int interception = 0;
	private String name = "Default";
	private int pointsAllowed = 0;
	private int sack = 0;
	private int safety = 0;
	private int td = 0;

	public void calculateFantasyPoints() {
		this.pointsAllowed = this.pointsAllowed == 0 ? 10
				: (this.pointsAllowed > 0 && this.pointsAllowed < 7 ? 7
						: (this.pointsAllowed > 6 && this.pointsAllowed < 14 ? 4
								: (this.pointsAllowed > 13 && this.pointsAllowed < 21 ? 1
										: (this.pointsAllowed > 20 && this.pointsAllowed < 28 ? 0
												: (this.pointsAllowed > 27 && this.pointsAllowed < 35 ? -1 : -4)))));

		this.fantasyPoints = this.sack + (this.interception * 2) + (this.fumblesRecovered * 2) + (this.safety * 2)
				+ (this.td * 6) + this.pointsAllowed;
	}

	public int getFantasyPoints() {
		return fantasyPoints;
	}

	public void setFantasyPoints(int fantasyPoints) {
		this.fantasyPoints = fantasyPoints;
	}

	public int getFumblesRecovered() {
		return fumblesRecovered;
	}

	public void setFumblesRecovered(int fumblesRecovered) {
		this.fumblesRecovered = fumblesRecovered;
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

	public int getPointsAllowed() {
		return pointsAllowed;
	}

	public void setPointsAllowed(int pointsAllowed) {
		this.pointsAllowed = pointsAllowed;
	}

	public int getSack() {
		return sack;
	}

	public void setSack(int sack) {
		this.sack = sack;
	}

	public int getSafety() {
		return safety;
	}

	public void setSafety(int safety) {
		this.safety = safety;
	}

	public int getTd() {
		return td;
	}

	public void setTd(int td) {
		this.td = td;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fantasyPoints;
		result = prime * result + fumblesRecovered;
		result = prime * result + interception;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + pointsAllowed;
		result = prime * result + sack;
		result = prime * result + safety;
		result = prime * result + td;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Defense))
			return false;
		Defense other = (Defense) obj;
		if (fantasyPoints != other.fantasyPoints)
			return false;
		if (fumblesRecovered != other.fumblesRecovered)
			return false;
		if (interception != other.interception)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (pointsAllowed != other.pointsAllowed)
			return false;
		if (sack != other.sack)
			return false;
		if (safety != other.safety)
			return false;
		if (td != other.td)
			return false;
		return true;
	}

}
