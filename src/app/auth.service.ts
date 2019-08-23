import { Injectable } from '@angular/core';
//import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    // localStorage.removeItem('t');
    // localStorage.removeItem('idname');
    // localStorage.removeItem('name');
    // localStorage.removeItem('role');
    // localStorage.removeItem('email');
    // localStorage.removeItem('displayBranch');
  
  } 

}
