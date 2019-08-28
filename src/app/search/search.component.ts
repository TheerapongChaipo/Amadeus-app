import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  //API url
  urlGetAllRoute = environment.AmadeusApiUrl + environment.SearchAllRoutePath;
  urlShortestPath = environment.AmadeusApiUrl + environment.ShortestPathPath;
  urlSearchAirline = environment.AmadeusApiUrl + environment.SearchAirlinePath;

  ngOnInit() {
    console.log('search');
  }


  onGetAllRoute() {  
      
    this.apiService.restApiSendParmHasHeader(this.urlGetAllRoute, null)
      .subscribe(
        data => {

        },
        error => {
          console.log(error.error.message)
      
        });
  }


}
