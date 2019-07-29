package com.fantasy.football.domain.player;

public class Kicker {
	private int fantasyPoints;
	private int fg0To19;
	private int fg20To29;
	private int fg30To39;
	private int fg40To49;
	private int fg50Plus;
	private String name;
	private int pat;

	public void calculateFantasyPoints() {
		this.fantasyPoints = this.pat + (this.fg0To19 * 3) + (this.fg20To29 * 3) + (this.fg30To39 * 3)
				+ (this.fg40To49 * 4) + (this.fg50Plus * 5);
	}

	public int getFantasyPoints() {
		return fantasyPoints;
	}

	public void setFantasyPoints(int fantasyPoints) {
		this.fantasyPoints = fantasyPoints;
	}

	public int getFg0To19() {
		return fg0To19;
	}

	public void setFg0To19(int fg0To19) {
		this.fg0To19 = fg0To19;
	}

	public int getFg20To29() {
		return fg20To29;
	}

	public void setFg20To29(int fg20To29) {
		this.fg20To29 = fg20To29;
	}

	public int getFg30To39() {
		return fg30To39;
	}

	public void setFg30To39(int fg30To39) {
		this.fg30To39 = fg30To39;
	}

	public int getFg40To49() {
		return fg40To49;
	}

	public void setFg40To49(int fg40To49) {
		this.fg40To49 = fg40To49;
	}

	public int getFg50Plus() {
		return fg50Plus;
	}

	public void setFg50Plus(int fg50Plus) {
		this.fg50Plus = fg50Plus;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPat() {
		return pat;
	}

	public void setPat(int pat) {
		this.pat = pat;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fantasyPoints;
		result = prime * result + fg0To19;
		result = prime * result + fg20To29;
		result = prime * result + fg30To39;
		result = prime * result + fg40To49;
		result = prime * result + fg50Plus;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + pat;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Kicker))
			return false;
		Kicker other = (Kicker) obj;
		if (fantasyPoints != other.fantasyPoints)
			return false;
		if (fg0To19 != other.fg0To19)
			return false;
		if (fg20To29 != other.fg20To29)
			return false;
		if (fg30To39 != other.fg30To39)
			return false;
		if (fg40To49 != other.fg40To49)
			return false;
		if (fg50Plus != other.fg50Plus)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (pat != other.pat)
			return false;
		return true;
	}

}
