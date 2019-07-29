package com.fantasy.football.domain.player;

public class Rb {
	private int fantasyPoints;
	private int fumble;
	private String name;
	private int receivingTD;
	private int receivingYard;
	private int reception;
	private int rushingTD;
	private int rushingYard;

	public void calculateFantasyPoints() {
		this.fantasyPoints = ((this.rushingYard / 10) + (this.rushingTD * 6) + (this.reception * 1)
				+ (this.receivingYard / 10) + (this.receivingTD * 6)) - (this.fumble * 2);
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getReceivingTD() {
		return receivingTD;
	}

	public void setReceivingTD(int receivingTD) {
		this.receivingTD = receivingTD;
	}

	public int getReceivingYard() {
		return receivingYard;
	}

	public void setReceivingYard(int receivingYard) {
		this.receivingYard = receivingYard;
	}

	public int getReception() {
		return reception;
	}

	public void setReception(int reception) {
		this.reception = reception;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fantasyPoints;
		result = prime * result + fumble;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + receivingTD;
		result = prime * result + receivingYard;
		result = prime * result + reception;
		result = prime * result + rushingTD;
		result = prime * result + rushingYard;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Rb))
			return false;
		Rb other = (Rb) obj;
		if (fantasyPoints != other.fantasyPoints)
			return false;
		if (fumble != other.fumble)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (receivingTD != other.receivingTD)
			return false;
		if (receivingYard != other.receivingYard)
			return false;
		if (reception != other.reception)
			return false;
		if (rushingTD != other.rushingTD)
			return false;
		if (rushingYard != other.rushingYard)
			return false;
		return true;
	}
	
}
