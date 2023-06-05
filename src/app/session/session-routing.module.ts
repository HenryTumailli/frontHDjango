import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarpassComponent } from './recuperarpass/recuperarpass.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'login', component: LoginComponent},
      {path:'recuperar', component: RecuperarpassComponent},
      // {path:'**',redirectTo:'login'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
