import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-xmasterpage',
  templateUrl: './xmasterpage.component.html',
  styleUrls: ['./xmasterpage.component.css']
})
export class XMasterpageComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {

    console.log('XMasterpageComponent');
    // this.user = {
    //   name: localStorage.getItem('name'),
    //   branch: localStorage.getItem('displayBranch')
    // };
  }

  Logout(): void {
    console.log("Logout"); 
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
