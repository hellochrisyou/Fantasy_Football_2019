import {Injectable, Output, EventEmitter} from '@angular/core';
import {QB, RB, WR, TE, DEF, Kicker} from 'src/app/shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  @Output() sendUserName: EventEmitter<string> = new EventEmitter();

  @Output() qbDraftComplete: EventEmitter<QB[]> = new EventEmitter();
  @Output() rbDraftComplete: EventEmitter<RB[]> = new EventEmitter();
  @Output() wrDraftComplete: EventEmitter<WR[]> = new EventEmitter();
  @Output() teDraftComplete: EventEmitter<TE[]> = new EventEmitter();
  @Output() defDraftComplete: EventEmitter<DEF[]> = new EventEmitter();
  @Output() kDraftComplete: EventEmitter<Kicker[]> = new EventEmitter();

  @Output() qbWaiverComplete: EventEmitter<QB[]> = new EventEmitter();
  @Output() rbWaiverComplete: EventEmitter<RB[]> = new EventEmitter();
  @Output() wrWaiverComplete: EventEmitter<WR[]> = new EventEmitter();
  @Output() teWaiverComplete: EventEmitter<TE[]> = new EventEmitter();
  @Output() defWaiverComplete: EventEmitter<DEF[]> = new EventEmitter();
  @Output() kWaiverComplete: EventEmitter<Kicker[]> = new EventEmitter();

  emitDraftQb(qbArray: QB[]): void {
    this.qbWaiverComplete.emit(qbArray);
  }
  emitDraftRb(rbArray: RB[]): void {
    this.rbWaiverComplete.emit(rbArray);
  }
  emitDraftWr(wrArray: WR[]): void {
    this.wrWaiverComplete.emit(wrArray);
  }
  emitDraftTe(teArray: TE[]): void {
    this.teWaiverComplete.emit(teArray);
  }
  emitDraftDef(defArray: DEF[]): void {
    this.defWaiverComplete.emit(defArray);
  }
  emitDraftK(kickerArray: Kicker[]): void {
    this.kWaiverComplete.emit(kickerArray);
  }

  emitWaiverQb(qbArray: QB[]): void {
    this.qbWaiverComplete.emit(qbArray);
  }
  emitWaiverRb(rbArray: RB[]): void {
    this.rbWaiverComplete.emit(rbArray);
  }
  emitWaiverWr(wrArray: WR[]): void {
    this.wrWaiverComplete.emit(wrArray);
  }
  emitWaiverTe(teArray: TE[]): void {
    this.teWaiverComplete.emit(teArray);
  }
  emitWaiverDef(defArray: DEF[]): void {
    this.defWaiverComplete.emit(defArray);
  }
  emitWaiverK(kickerArray: Kicker[]): void {
    this.kWaiverComplete.emit(kickerArray);
  }
}
