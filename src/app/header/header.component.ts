import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

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

  // goHome() {
  //   this.router.navigate(['']); 
  // }

  // goSignup() {
  //   this.router.navigate(['sign']); 
  // }
  // gologin() {
  //   this.router.navigate(['login']); 
  // }

 ngOnInit() {
  }

}
