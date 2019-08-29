import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private httpClient: HttpClient
  ) { }

  //API url
  urlGetAllRoute = environment.AmadeusApiUrl + environment.SearchAllRoutePath;
  urlShortestPath = environment.AmadeusApiUrl + environment.ShortestPathPath;
  urlSearchAirline = environment.AmadeusApiUrl + environment.SearchAirlinePath;
  urlSearchbyroutepath = environment.AmadeusApiUrl + environment.Searchbyroutepath;

  RoutesAll = [];
  SearchAirlineRoutesPath = [];
  
  
  notSure: any;
  isShow: boolean;
  hasData: boolean;
  mode: any;
  ResultByRoutepath = 0;
  ResultByRoutepathStr = "";
  txtroutepathStr: any;


  ngOnInit() {
   this.isShow = false;
   this.hasData = false;
  }


  onGetAllRoute() {
  
    this.RoutesAll = [];
    var header = new HttpHeaders();
    header = header.append('Authorization', 'Basic ' + btoa('amdtest:p@ssw0rd'));

    this.httpClient.get(this.urlGetAllRoute, { headers: header })
      .subscribe(
        data => {
          this.RoutesAll.push(data);

          console.log(this.RoutesAll);
        },
        error => {
          console.log(error.error.message)
        });
  }

  onSearchAirline() {
  
    this.isShow = true;   
    this.mode ='a';
    this.apiService.restApiSendParmHasHeader(this.urlSearchAirline, { "source": "A", "destination": "H" })
      .subscribe(
        data => {         
          this.SearchAirlineRoutesPath.push(data);       
          
        },
        error => {
          console.log(error.error.message);

        });
  }

  onByroutepath() {
    
    console.log(this.txtroutepathStr);
    this.isShow = true; 
    this.mode ='b';  
    var header = new HttpHeaders();
    header = header.append('Authorization', 'Basic ' + btoa('amdtest:p@ssw0rd'));

    const  param = new  HttpParams().set('routePath',this.txtroutepathStr )  //"A-B-C-G-H-I-D"
    this.httpClient.get(this.urlSearchbyroutepath, { headers: header, params:param })
      .subscribe(
        data => {
       
          console.log(data);
          this.notSure = data;
       
          if(this.notSure.MessageDes == "Can not found this route path. Please try any route path again."  ){
            this.isShow = false; 
            this.hasData = true;
          }else
          {           
            this.ResultByRoutepath = this.notSure.Cost;
            this.ResultByRoutepathStr = this.notSure.Routepath; 
          }
         
        },
        error => {
          console.log(error.error.message);
        });
  }


  onShortestPath() {   
    this.isShow = true; 
    this.mode ='b';  
  
    this.apiService.restApiSendParmHasHeader(this.urlShortestPath, { "source": "A", "destination": "D" })
      .subscribe(
        data => {         
          console.log(data);
          this.notSure = data;
          this.ResultByRoutepath = this.notSure.Cost;
          this.ResultByRoutepathStr = this.notSure.Routepath; 
        },
        error => {
          console.log(error.error.message);

        });
  }
  
}
