import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    SidenavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
