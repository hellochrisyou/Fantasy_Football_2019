import {Injectable} from '@angular/core';
import {Player} from 'src/app/shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  resultArray: any[] = [];
  otherMatch = false;
  myPlayers: Player[] = [];
  otherPlayers: Player[] = [];

  // Filters Waiver or Draft Players
  filterArray(arraySet: any[]): any[] {
    this.resultArray = [];
    for (const tmp of arraySet) {
      for (const myPlayer of this.myPlayers) {
        if (myPlayer.name === tmp.name) {
          continue;
        }
      }
      for (const otherPlayer of this.otherPlayers) {
        if (otherPlayer.name === tmp.name) {
          continue;
        }
      }
      this.resultArray.push(tmp);
    }
    return this.resultArray;
  }

  constructor() {}

  setPlayers(players: Player[], otherPlayers: Player[]): void {
    // Set My Players
    this.myPlayers = players;
    // Set Other Players
    this.otherPlayers = otherPlayers;
  }
}
