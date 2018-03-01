import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
success() {
  const dialogRef = this.dialog.open(SuccessComponent, {
    height: '300px' , width: '300px'
});


}


  ngOnInit() {
  }

}
