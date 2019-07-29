import {Injectable} from '@angular/core';
import {StatsFunctionService} from '../logic/stats-function.service';
import {ApiService} from '../api/api.service';
import {FilterService} from '../logic/filter.service';
import {QB, RB, WR, TE, DEF, Kicker, Player} from 'src/app/shared/model/interface.model';
import {HttpClient} from '@angular/common/http';
import * as globals from '../../shared/var/enum';
import {ThirdPartyService} from '../abstract/third-party.service';
import {NotifyService} from '../emit/notify.service';
@Injectable({
  providedIn: 'root'
})
export class DraftService extends ThirdPartyService {
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
    this.api.httpGet(globals.ApiUrls.lastSeason + 'QB').subscribe(
      data => {
        console.log('qbdata', data);
        this.qbArray = this.statsFunctionService.returnQbStats(data.players);
        this.qbArray = this.filterService.filterArray(this.qbArray);
        this.notifyService.emitDraftRb(this.rbArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonRB(): void {
    this.api.httpGet(globals.ApiUrls.lastSeason + 'RB').subscribe(
      data => {
        this.rbArray = this.statsFunctionService.returnRbStats(data.players);
        this.rbArray = this.filterService.filterArray(this.rbArray);
        this.notifyService.emitDraftWr(this.wrArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonWR(): void {
    this.api.httpGet(globals.ApiUrls.lastSeason + 'WR').subscribe(
      data => {
        this.wrArray = this.statsFunctionService.returnWrStats(data.players);
        this.wrArray = this.filterService.filterArray(this.wrArray);
        this.notifyService.emitDraftTe(this.teArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonTE(): void {
    this.api.httpGet(globals.ApiUrls.lastSeason + 'TE').subscribe(
      data => {
        this.teArray = this.statsFunctionService.returnTeStats(data.players);
        this.teArray = this.filterService.filterArray(this.teArray);
        this.notifyService.emitDraftDef(this.defArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonDEF(): void {
    this.api.httpGet(globals.ApiUrls.lastSeason + 'DEF').subscribe(
      data => {
        this.defArray = this.statsFunctionService.returnDEFStats(data.players);
        this.defArray = this.filterService.filterArray(this.defArray);
        this.notifyService.emitDraftDef(this.defArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setLastSeasonK(): void {
    this.api.httpGet(globals.ApiUrls.lastSeason + 'K').subscribe(
      data => {
        this.kArray = this.statsFunctionService.returnKickerStats(data.players);
        this.kArray = this.filterService.filterArray(this.kArray);
        this.notifyService.emitDraftK(this.kArray);
      },
      err => {
        console.log(err);
      }
    );
  }
}

// import {Injectable} from '@angular/core';
// import {StatsFunctionService} from './logic/stats-function.service';
// import {ApiService} from './api/api.service';
// import {FilterService} from './logic/filter.service';
// import {QB, RB, WR, TE, DEF, Kicker, Player} from 'src/app/shared/model/interface.model';
// import {HttpClient} from '@angular/common/http';
// import * as globals from '../shared/var/enum';
// @Injectable({
//   providedIn: 'root'
// })
// export class DraftService {
//   draftQB: QB[] = [];
//   draftRB: RB[] = [];
//   draftWR: WR[] = [];
//   draftTE: TE[] = [];
//   draftDefense: DEF[] = [];
//   draftKicker: Kicker[] = [];
//   constructor(
//     public http: HttpClient,
//     private statsFunctionService: StatsFunctionService,
//     private api: ApiService,
//     private filterService: FilterService
//   ) {}

//   CallNflApi() {
//     this.setLastSeasonQB();
//     this.setLastSeasonRB();
//     this.setLastSeasonWR();
//     this.setLastSeasonTE();
//     this.setLastSeasonDEF();
//     this.setLastSeasonK();
//   }
//   setLastSeasonQB(): void {
//     this.api.httpGet(globals.ApiUrls.lastSeason + 'QB').subscribe(
//       data => {
//         this.draftQB = this.statsFunctionService.returnQbStats(data.players);
//         this.draftQB = this.filterService.filterArray(this.draftQB);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setLastSeasonRB(): void {
//     this.api.httpGet(globals + 'RB').subscribe(
//       data => {
//         // Retrieve stats of Rb objects
//         this.draftRB = this.statsFunctionService.returnRbStats(data.players);
//         this.draftRB = this.filterService.filterArray(this.draftRB);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setLastSeasonWR(): void {
//     this.api.httpGet(globals + 'WR').subscribe(
//       data => {
//         // Retrieve stats of WR objects
//         this.draftWR = this.statsFunctionService.returnTeStats(data.players);
//         this.draftWR = this.filterService.filterArray(this.draftWR);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setLastSeasonTE(): void {
//     this.api.httpGet(globals + 'TE').subscribe(
//       data => {
//         // Retrieve stats of TE objects
//         this.draftTE = this.statsFunctionService.returnTeStats(data.players);
//         this.draftTE = this.filterService.filterArray(this.draftTE);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setLastSeasonDEF(): void {
//     this.api.httpGet(globals + 'DEF').subscribe(
//       data => {
//         // Retrieve stats of Defense objects
//         this.draftDefense = this.statsFunctionService.returnDEFStats(data.players);
//         // console.log(this.draftDefense);
//         this.draftDefense = this.filterService.filterArray(this.draftDefense);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }
//   setLastSeasonK(): void {
//     this.api.httpGet(globals + 'K').subscribe(
//       data => {
//         // Retrieve stats of Kicker objects
//         this.draftKicker = this.statsFunctionService.returnKickerStats(data.players);
//         this.draftKicker = this.filterService.filterArray(this.draftKicker);
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   }

//   getDraftQBs(): QB[] {
//     return this.draftQB;
//   }
//   getDraftRBs(): RB[] {
//     return this.draftRB;
//   }
//   getDraftWRs(): WR[] {
//     return this.draftWR;
//   }
//   getDraftTEs(): TE[] {
//     return this.draftTE;
//   }
//   getDraftDEFs(): DEF[] {
//     return this.draftDefense;
//   }
//   getDraftKs(): Kicker[] {
//     return this.draftKicker;
//   }
// }
