import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [ Validators.required, Validators.email]);
  hide = true;
getErrorMessage() {
return this.email.hasError('required') ? 'enter a value ' :
 this.email.hasError('email') ? 'enter a valid email' :
  '';
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
