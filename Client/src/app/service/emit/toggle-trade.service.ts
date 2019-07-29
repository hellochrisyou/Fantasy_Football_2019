import {Injectable, Output, EventEmitter} from '@angular/core';
import {League, DTO} from 'src/app/shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleTradeService {
  isTrade = true;
  isActive = false;
  otherTeamName = '';
  @Output() tradePopUp: EventEmitter<DTO> = new EventEmitter();

  @Output() statusPopUp: EventEmitter<DTO> = new EventEmitter();

  tradeSubmit(dto: DTO) {
    this.tradePopUp.emit(dto);
  }
  toggleSubmit(dto: DTO) {
    this.statusPopUp.emit(dto);
  }
  setIsTrade(isTrade: boolean): void {
    this.isTrade = isTrade;
  }
  getIsTrade(): boolean {
    return this.isTrade;
  }
  setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }
  getIsActive(): boolean {
    return this.isActive;
  }
  setOtherTeamName(otherTeamName: string): void {
    this.otherTeamName = otherTeamName;
  }
  getOtherTeamName(): string {
    return this.otherTeamName;
  }
}
