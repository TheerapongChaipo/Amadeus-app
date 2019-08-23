import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amadeus-app';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //console.log("login page");
    //this.router.navigate(['/login']);
    // var email = localStorage.getItem('email');    
    // console.log(email)
    // if (email == '')
    // {
    //   this.router.navigate(['/login']);
    // }
  }
}