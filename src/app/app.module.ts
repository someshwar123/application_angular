import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { FoodOrderService } from './food-order.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatAutocompleteModule, MatIcon, MatFormFieldModule,
         MatButtonModule, MatToolbarModule, MatIconModule, MatSlideToggleModule, MatDialogModule ,MatProgressBarModule,} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './filter-pipe';
import { LoginaccessComponent } from './loginaccess/loginaccess.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent},
     {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign',
        component: SignComponent
      },
     
      {
        path : 'success',
        component : SuccessComponent
      }, {
        path : 'loginaccess',
        component : LoginaccessComponent
      },
      {path: '**', redirectTo: 'header' }

 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    LoginComponent,
    SignComponent,
     FilterPipe,
     LoginaccessComponent,
     SuccessComponent
  ],
  imports: [
    ReactiveFormsModule, FormsModule, BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), MatToolbarModule, 
    MatDialogModule, MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatIconModule,
     HttpModule, MatAutocompleteModule,MatProgressBarModule,],
  providers: [FoodOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
