import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  {  path: 'search', component: SearchComponent} ,//canActivate: [AuthGuard] 
  {
    path: '', component: LoginComponent,   
    children: [
      { path: '', redirectTo: '/addrate',pathMatch:"full"}, //,canActivate: [AuthGuard]
      {  path: 'search', component: SearchComponent }  //, canActivate: [AuthGuard]
     // { path: 'addrate', component: AddrateComponent, canActivate: [AuthGuard]},
      // { path: 'report', component: GenarateReport1Component,  canActivate: [AuthGuard] },
      // { path: 'genreport2', component: GenarateReport2Component, canActivate: [AuthGuard] },   
      // { path: 'walletConfig', component: WalletConfigComponent, canActivate: [AuthGuard] } 
    ]
  },
  {  path: '**', component: PageNotFoundComponent  },
  // {  path: 'search', component: SearchComponent, canActivate: [AuthGuard] } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //,{useHash: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }

