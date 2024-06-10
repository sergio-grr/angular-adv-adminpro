import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
  ]
  ,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AuthModule { }
