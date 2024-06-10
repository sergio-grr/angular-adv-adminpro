import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/register/auth.rounting';


import { Error404Component } from './pages/error404/error404.component';



const routes: Routes = [

    // path: '/dashboard' PagesRouting
    
    // path: '/auth' AuthRouting
    // path: '/medicos' MedicosRouting
    // path: '/compras' ShopRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: Error404Component },
];



@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
