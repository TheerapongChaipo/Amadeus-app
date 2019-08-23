import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { XMasterpageComponent} from './xmasterpage/xmasterpage.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: XMasterpageComponent,
    children: [
      { path: '', redirectTo: '/search', pathMatch: 'full'},  //,canActivate: [AuthGuard]
      {  path: 'search', component: SearchComponent}           //, canActivate: [AuthGuard] 
      // { path: 'addrate', component: AddrateComponent, canActivate: [AuthGuard]},
      // { path: 'report', component: GenarateReport1Component,  canActivate: [AuthGuard] },
    ]
  },
  {  path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //,{useHash: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }

