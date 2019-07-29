import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonWeekService {
  constructor() {}

  calculatestartWeek(): Date {
    const month = 8;
    const tmpYear = new Date();
    let year = 0;
    year = tmpYear.getFullYear();
    let d = new Date(year, month, 1, 0, 0, 0, 0);
    let day = 0;
    if (d.getDay() === 3) {
      day = 2;
      d = new Date(d.setDate(day));
    } else if (d.getDay() < 5) {
      // check if first of the month is a Monday, if so return the date, otherwise get to the Monday following the first of the month
      day = 5 - d.getDay();
      d = new Date(d.setDate(day));
    } else if (d.getDay() > 5) {
      // check if first of the month is a Monday, if so return the date, otherwise get to the Monday following the first of the month
      day = 12 - d.getDay();
      d = new Date(d.setDate(day));
    }
    return d;
  }
}
