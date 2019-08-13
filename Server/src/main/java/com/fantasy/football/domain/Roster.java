package com.fantasy.football.domain;

import java.util.Objects;
import java.util.Set;

import com.fantasy.football.domain.entity.Player;

public class Roster {
	int qb = 0;
	int rb = 0;
	int wr = 0;
	int te = 0;
	int flex = 0;
	int def = 0;
	int k = 0;

	public Roster() {
	};

	public Roster(Set<Player> players) {
		for (Player player : players) {
			switch (player.getPosition()) {
			case "QB":
				this.qb++;
				break;
			case "RB":
				this.rb++;
				break;
			case "WR":
				this.wr++;
				break;
			case "TE":
				this.te++;
				break;
			case "FLEX":
				this.flex++;
				break;
			case "DEF":
				this.def++;
				break;
			case "K":
				this.k++;
				break;
			default:
				break;
			}
		}
	}

	public boolean checkPosition(String position) {
		switch (position) {
		case "QB":
			this.checkQb();
		case "RB":
			this.checkRb();
		case "WR":
			this.checkWr();
		case "TE":
			this.checkTe();
		case "FLEX":
			this.checkFlex();
		case "DEF":
			this.checkDef();
		case "K":
			this.checkKicker();
		default:
			return false;
		}
	}
	
	public boolean checkQb() {
		if (this.qb < 1) {
			return true;
		} else {
		return false;
		}
	}

	public boolean checkRb() {
		if (this.rb < 2) {
			return true;
		} else {
			return false;
			}
	}

	public boolean checkWr() {
		if (this.wr < 3) {
			return true;
		} else {
			return false;
			}
	}

	public boolean checkTe() {
		if (this.te < 1) {
			return true;
		} else {
			return false;
			}
	}

	public boolean checkFlex() {
		if (this.flex < 1) {
			return true;
		} else {
			return false;
			}
	}
	
	public boolean checkDef() {
		if (this.def < 1) {
			return true;
		} else {
			return false;
			}
	}

	public boolean checkKicker() {
		if (this.k < 1)	{
			return true;
		} else {
			return false;
			}
	}

	public int getQb() {
		return qb;
	}

	public void setQb(int qb) {
		this.qb = qb;
	}

	public int getRb() {
		return rb;
	}

	public void setRb(int rb) {
		this.rb = rb;
	}

	public int getWr() {
		return wr;
	}

	public void setWr(int wr) {
		this.wr = wr;
	}

	public int getTe() {
		return te;
	}

	public void setTe(int te) {
		this.te = te;
	}

	public int getDef() {
		return def;
	}

	public void setDef(int def) {
		this.def = def;
	}

	public int getK() {
		return k;
	}

	public void setK(int k) {
		this.k = k;
	}

	@Override
	public int hashCode() {
		return Objects.hash(def, k, qb, rb, te, wr);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Roster)) {
			return false;
		}
		Roster other = (Roster) obj;
		return def == other.def && k == other.k && qb == other.qb && rb == other.rb && te == other.te && wr == other.wr;
	}

}
