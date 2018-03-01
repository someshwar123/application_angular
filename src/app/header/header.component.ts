import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // openlogin() {
  //   const dialogRef = this.dialog.open(LoginComponent, {
  //     height: '500px' , width: '500px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  // opensignup() {
  //   const dialogRef1 = this.dialog.open(SignComponent, {
  //     height: '500px', width: '500px'
  //   });

  //   dialogRef1.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  ngOnInit() {
  }

}
