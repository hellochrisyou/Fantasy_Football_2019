import {Injectable} from '@angular/core';

import {QB, RB, WR, TE, DEF, Kicker} from 'src/app/shared/model/interface.model';
import {HttpClient} from '@angular/common/http';
import {StatsFunctionService} from '../logic/stats-function.service';
import {ApiService} from '../api/api.service';
import {FilterService} from '../logic/filter.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ThirdPartyService {
  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defArray: DEF[] = [];
  kArray: Kicker[] = [];

  constructor() {}

  abstract setLastSeasonQB(): void;
  abstract setLastSeasonRB(): void;
  abstract setLastSeasonWR(): void;
  abstract setLastSeasonTE(): void;
  abstract setLastSeasonDEF(): void;
  abstract setLastSeasonK(): void;

  CallNflApi(): void {
    this.setLastSeasonQB();
    this.setLastSeasonRB();
    this.setLastSeasonWR();
    this.setLastSeasonTE();
    this.setLastSeasonDEF();
    this.setLastSeasonK();
  }

  getQbArray(): QB[] {
    return this.qbArray;
  }
  getRbArray(): RB[] {
    return this.rbArray;
  }
  getWrArray(): WR[] {
    return this.wrArray;
  }
  getTeArray(): TE[] {
    return this.teArray;
  }
  getDefArray(): DEF[] {
    return this.defArray;
  }
  getKickerArray(): Kicker[] {
    return this.kArray;
  }
}
