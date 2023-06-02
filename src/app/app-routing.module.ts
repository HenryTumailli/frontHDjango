import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import('./session/session.module').then(m => m.SessionModule)},
  {path:'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
