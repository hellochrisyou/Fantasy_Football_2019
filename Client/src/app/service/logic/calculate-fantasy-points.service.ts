import {Injectable} from '@angular/core';
import {QB, RB, WR, TE, DEF, Kicker} from '../../shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatePointsService {
  fantasyPoints = 0;
  pointsAllowed = 0;

  calculateQBFantasy(qb: QB): number {
    this.fantasyPoints =
      qb.passingTD * 4 +
      qb.passingYard / 25 -
      qb.interception * 2 +
      qb.rushingYard / 10 +
      qb.rushingTD * 6 -
      qb.fumble * 2;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateRBFantasy(rb: RB): number {
    this.fantasyPoints =
      rb.rushingYard / 10 +
      rb.rushingTD * 6 +
      rb.reception * 1 +
      rb.receivingYard / 10 +
      rb.receivingTD * 6 -
      rb.fumble * 2;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateWRFantasy(wr: WR): number {
    this.fantasyPoints = wr.reception * 1 + wr.receivingYard / 10 + wr.receivingTD * 6;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateTEFantasy(te: TE): number {
    this.fantasyPoints = te.reception * 1 + te.receivingYard / 10 + te.receivingTD * 6;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateDEFFantasy(def: DEF): number {
    def.pointsAllowed === 0
      ? (this.pointsAllowed = 10)
      : def.pointsAllowed > 0 && def.pointsAllowed < 7
      ? (this.pointsAllowed = 7)
      : def.pointsAllowed > 6 && def.pointsAllowed < 14
      ? (this.pointsAllowed = 4)
      : def.pointsAllowed > 13 && def.pointsAllowed < 21
      ? (this.pointsAllowed = 1)
      : def.pointsAllowed > 20 && def.pointsAllowed < 28
      ? (this.pointsAllowed = 0)
      : def.pointsAllowed > 27 && def.pointsAllowed < 35
      ? (this.pointsAllowed = -1)
      : (this.pointsAllowed = -4);

    // tslint:disable-next-line:max-line-length
    this.fantasyPoints =
      +def.sack + +def.interception + +def.fumblesRecovered + +def.safety + +def.TD + +def.pointsAllowed;

    //   parseInt(def.sack, 10) +
    //   parseInt(def.interception, 10) +
    //   parseInt(def.fumblesRecovered, 10) +
    //   parseInt(def.safety, 10) +
    //   parseInt(def.TD, 10) +
    //   parseInt(def.pointsAllowed, 10);
    return Number.parseFloat(this.fantasyPoints.toFixed(2));
  }
  calculateKickerFantasy(kicker: Kicker): number {
    this.fantasyPoints =
      +kicker.PAT +
      +kicker.fg0To19 * 3 +
      +kicker.fg20To29 * 3 +
      +kicker.fg30To39 * 3 +
      +kicker.fg40To49 * 4 +
      +kicker.fg50Plus * 5;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
}
