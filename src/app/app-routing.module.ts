import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
     path: '', pathMatch: 'full', redirectTo: '/default'
   },
  {
    path: 'default', loadChildren: () => import('./layout/default/default.module').then( m => m.DefaultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
