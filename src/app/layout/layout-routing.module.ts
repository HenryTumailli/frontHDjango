import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PreubaComponent } from '../preuba/preuba.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'main', 
      component: MainComponent,
      children:[
        {path:'prueba', component: PreubaComponent}
      ]},
      // {path:'**',redirectTo:'login'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
