import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../model/interface.model';

@Component({
  selector: 'app-submit-popup-dialog',
  templateUrl: './submit-popup.dialog.html',
  styleUrls: ['./submit-popup.dialog.scss']
})
export class SubmitPopupDialog implements OnInit {
  title = '';
  subTitle = '';
  text = '';
  constructor(public dialogRef: MatDialogRef<SubmitPopupDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.text = data.text;
  }
  ngOnInit() {}
}
