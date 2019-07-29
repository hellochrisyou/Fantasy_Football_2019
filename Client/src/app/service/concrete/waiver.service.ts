import {Injectable} from '@angular/core';
import {ThirdPartyService} from '../abstract/third-party.service';
import {HttpClient} from '@angular/common/http';
import {StatsFunctionService} from '../logic/stats-function.service';
import {ApiService} from '../api/api.service';
import {FilterService} from '../logic/filter.service';
import * as globals from '../../shared/var/enum';
import {NotifyService} from '../emit/notify.service';

@Injectable({
  providedIn: 'root'
})
export class WaiverService extends ThirdPartyService {
  CalculatePointsService: any;
  myTeam: any;
  constructor(
    public http: HttpClient,
    public statsFunctionService: StatsFunctionService,
    public api: ApiService,
    public filterService: FilterService,
    public notifyService: NotifyService
  ) {
    super();
  }

  setLastSeasonQB(): void {
    this.api.httpGet(globals.ApiUrls.lastWeek + 'QB').subscribe(
      data => {
        this.qbArray = this.statsFunctionService.returnQbStats(data.players);
        this.qbArray = this.filterService.filterArray(this.qbArray);
        this.notifyService.emitWaiverQb(this.qbArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonRB(): void {
    this.api.httpGet(globals.ApiUrls.lastWeek + 'RB').subscribe(
      data => {
        this.rbArray = this.statsFunctionService.returnRbStats(data.players);
        this.rbArray = this.filterService.filterArray(this.rbArray);
        this.notifyService.emitWaiverRb(this.rbArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonWR(): void {
    this.api.httpGet(globals.ApiUrls.lastWeek + 'WR').subscribe(
      data => {
        this.wrArray = this.statsFunctionService.returnTeStats(data.players);
        this.wrArray = this.filterService.filterArray(this.wrArray);
        this.notifyService.emitWaiverWr(this.wrArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonTE(): void {
    this.api.httpGet(globals.ApiUrls.lastWeek + 'TE').subscribe(
      data => {
        this.teArray = this.statsFunctionService.returnTeStats(data.players);
        this.teArray = this.filterService.filterArray(this.teArray);
        this.notifyService.emitWaiverTe(this.teArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonDEF(): void {
    this.api.httpGet(globals.ApiUrls.lastWeek + 'DEF').subscribe(
      data => {
        this.defArray = this.statsFunctionService.returnDEFStats(data.players);
        this.defArray = this.filterService.filterArray(this.defArray);
        this.notifyService.emitWaiverDef(this.defArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonK(): void {
    this.api.httpGet(globals.ApiUrls.lastWeek + 'K').subscribe(
      data => {
        this.kArray = this.statsFunctionService.returnKickerStats(data.players);
        this.kArray = this.filterService.filterArray(this.kArray);
        this.notifyService.emitWaiverK(this.kArray);
      },
      err => {
        console.log(err);
      }
    );
  }
}

// import {Injectable} from '@angular/core';

// import {CalculatePointsService} from '../logic/calculate-fantasy-points.service';

// import {StatsFunctionService} from '../logic/stats-function.service';
// import {QB, RB, WR, TE, DEF, Kicker, Team, Player} from '../../shared/model/interface.model';
// import {ApiService} from './api.service';
// import {FilterService} from '../logic/filter.service';
// import {HttpClient} from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class WaiverService {
//   myTeam: Team;

//   tmpPlayer: Player;
//   returnPlayers: Player[] = [];

//   waiverQB: QB[] = [];
//   waiverRB: RB[] = [];
//   waiverWR: WR[] = [];
//   waiverTE: TE[] = [];
//   waiverDefense: DEF[] = [];
//   waiverKicker: Kicker[] = [];

//   constructor(
//     public http: HttpClient,
//     private statsFunctionService: StatsFunctionService,
//     private api: ApiService,
//     private filterService: FilterService,
//     private CalculatePointsService: CalculatePointsService
//   ) {}

//   private url = 'https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&position=';

//   CallNflApi() {
//     this.setWeeklyQB();
//     this.setWeeklyRB();
//     this.setWeeklyWR();
//     this.setWeeklyTE();
//     this.setWeeklyDEF();
//     this.setWeeklyKicker();
//     this.waiverQB = this.filterService.filterArray(this.waiverQB);
//     this.waiverRB = this.filterService.filterArray(this.waiverRB);
//     this.waiverWR = this.filterService.filterArray(this.waiverWR);
//     this.waiverTE = this.filterService.filterArray(this.waiverTE);
//     this.waiverDefense = this.filterService.filterArray(this.waiverDefense);
//     this.waiverKicker = this.filterService.filterArray(this.waiverKicker);
//   }

//   setWeeklyQB() {
//     this.api.httpGet(this.url + 'QB').subscribe(
//       data => {
//         // Transform return data into Qb class
//         this.waiverQB = this.statsFunctionService.returnQbStats(data.players);

//         // Calculate and assign fantasy points to player on my team
//         for (const tmpQb of this.waiverQB) {
//           tmpQb.fantasy_points = this.CalculatePointsService.calculateQBFantasy(tmpQb);
//           for (const tmp of this.myTeam.players) {
//             if (tmpQb.name === tmp.name) {
//               this.myTeam.players[this.myTeam.players.indexOf(tmp)].fantasy_points = tmpQb.fantasy_points;
//             }
//           }
//         }
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }

//   setWeeklyRB() {
//     this.api.httpGet(this.url + 'RB').subscribe(
//       data => {
//         // Transform return data into Rb class
//         this.waiverRB = this.statsFunctionService.returnRbStats(data.players);

//         // Calculate and assign fantasy points to player on my team
//         for (const tmpRb of this.waiverRB) {
//           tmpRb.fantasy_points = this.CalculatePointsService.calculateRBFantasy(tmpRb);
//           for (const tmp of this.myTeam.players) {
//             if (tmpRb.name === tmp.name) {
//               this.myTeam.players[this.myTeam.players.indexOf(tmp)].fantasy_points = tmpRb.fantasy_points;
//             }
//           }
//         }
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }

//   setWeeklyWR() {
//     this.api.httpGet(this.url + 'WR').subscribe(
//       data => {
//         // Transform return data into Wr class
//         this.waiverWR = this.statsFunctionService.returnWrStats(data.players);

//         // Calculate and assign fantasy points to player on my team
//         for (const tmpWr of this.waiverWR) {
//           tmpWr.fantasy_points = this.CalculatePointsService.calculateWRFantasy(tmpWr);
//           for (const tmp of this.myTeam.players) {
//             if (tmpWr.name === tmp.name) {
//               this.myTeam.players[this.myTeam.players.indexOf(tmp)].fantasy_points = tmpWr.fantasy_points;
//             }
//           }
//         }
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setWeeklyTE() {
//     this.api.httpGet(this.url + 'TE').subscribe(
//       data => {
//         // Transform return data into Te class
//         this.waiverTE = this.statsFunctionService.returnTeStats(data.players);

//         // Calculate and assign fantasy points to player on my team
//         for (const tmpTe of this.waiverTE) {
//           tmpTe.fantasy_points = this.CalculatePointsService.calculateTEFantasy(tmpTe);
//           for (const tmp of this.myTeam.players) {
//             if (tmpTe.name === tmp.name) {
//               this.myTeam.players[this.myTeam.players.indexOf(tmp)].fantasy_points = tmpTe.fantasy_points;
//             }
//           }
//         }
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setWeeklyDEF() {
//     this.api.httpGet(this.url + 'DEF').subscribe(
//       data => {
//         // Transform return data into Def class
//         this.waiverDefense = this.statsFunctionService.returnDEFStats(data.players);

//         // Calculate and assign fantasy points to player on my team
//         for (const tmpDef of this.waiverDefense) {
//           tmpDef.fantasy_points = this.CalculatePointsService.calculateDEFFantasy(tmpDef);
//           for (const tmp of this.myTeam.players) {
//             if (tmpDef.name === tmp.name) {
//               this.myTeam.players[this.myTeam.players.indexOf(tmp)].fantasy_points = tmpDef.fantasy_points;
//             }
//           }
//         }
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setWeeklyKicker() {
//     this.api.httpGet(this.url + 'K').subscribe(
//       data => {
//         // Transform return data into Kicker class
//         this.waiverKicker = this.statsFunctionService.returnKickerStats(data.players);

//         // Calculate and assign fantasy points to player on my team
//         for (const tmpK of this.waiverKicker) {
//           tmpK.fantasy_points = this.CalculatePointsService.calculateKickerFantasy(tmpK);
//           for (const tmp of this.myTeam.players) {
//             if (tmpK.name === tmp.name) {
//               this.myTeam.players[this.myTeam.players.indexOf(tmp)].fantasy_points = tmpK.fantasy_points;
//             }
//           }
//         }
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }

//   filterArray(anySet: any[], name: string): void {
//     anySet.forEach((item, index) => {
//       if (item.name === name) {
//         anySet.splice(index, 1);
//       }
//     });
//   }

//   removeQB(name: string): void {
//     this.filterArray(this.waiverQB, name);
//   }
//   removeRB(name: string): void {
//     this.filterArray(this.waiverRB, name);
//   }
//   removeWR(name: string): void {
//     this.filterArray(this.waiverWR, name);
//   }
//   removeTE(name: string): void {
//     this.filterArray(this.waiverTE, name);
//   }
//   removeDefense(name: string): void {
//     this.filterArray(this.waiverDefense, name);
//   }
//   removeKicker(name: string): void {
//     this.filterArray(this.waiverKicker, name);
//   }

//   getWeeklyQB() {
//     return this.waiverQB;
//   }

//   getWeeklyRB() {
//     return this.waiverRB;
//   }

//   getWeeklyWR() {
//     return this.waiverWR;
//   }

//   getWeeklyTE() {
//     return this.waiverTE;
//   }

//   getWeeklyDEF() {
//     return this.waiverDefense;
//   }

//   getWeeklyKicker() {
//     return this.waiverKicker;
//   }
// }
