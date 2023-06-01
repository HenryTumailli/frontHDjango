import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './session/login/login.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {path:'/session', component: LoginComponent},
  {path:'/layout', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
