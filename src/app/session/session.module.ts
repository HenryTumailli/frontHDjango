import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { LoginComponent } from './login/login.component';
import { RecuperarpassComponent } from './recuperarpass/recuperarpass.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarpassComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class SessionModule { }
