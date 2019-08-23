import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { XMasterpageComponent } from './xmasterpage/xmasterpage.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoginComponent,
    XMasterpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard,{provide: LocationStrategy, useClass: PathLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
