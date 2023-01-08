import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },

  {
    path: '',
    loadChildren: () => import('./modules/main/main.module')
      .then(m => m.MainModule)
  },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
