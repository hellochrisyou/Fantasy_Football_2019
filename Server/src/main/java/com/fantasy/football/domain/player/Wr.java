package com.fantasy.football.domain.player;

public class Wr {
	private int fantasyPoints;
	private String name;
	private int receivingTD;
	private int receivingYard;
	private int reception;

	public void calculateFantasyPoints() {
		this.fantasyPoints = (this.reception * 1) + (this.receivingYard / 10) + (this.receivingTD * 6);
	}

	public int getFantasyPoints() {
		return fantasyPoints;
	}

	public void setFantasyPoints(int fantasyPoints) {
		this.fantasyPoints = fantasyPoints;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fantasyPoints;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + receivingTD;
		result = prime * result + receivingYard;
		result = prime * result + reception;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Wr))
			return false;
		Wr other = (Wr) obj;
		if (fantasyPoints != other.fantasyPoints)
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
		return true;
	}
	
	
}
