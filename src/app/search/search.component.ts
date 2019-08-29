import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2'

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
  source: any;
  destination: any;
  airline = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
    { id: 8, name: "H" },
    { id: 9, name: "I" }
  ];


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
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
  }

  onSearchAirline() {

    if (this.source === undefined || this.destination === undefined) {
      return;
    }
    this.isShow = true;
    this.mode = 'a';
    this.SearchAirlineRoutesPath = [];
    this.apiService.restApiSendParmHasHeader(this.urlSearchAirline, { "source": this.source, "destination": this.destination })
      .subscribe(
        data => {
          console.log(data);
          this.SearchAirlineRoutesPath.push(data);

        },
        error => {
          console.log(error.error.message);
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
  }

  onByroutepath() {

    console.log(this.txtroutepathStr);
    this.isShow = true;
    this.mode = 'b';
    var header = new HttpHeaders();
    header = header.append('Authorization', 'Basic ' + btoa('amdtest:p@ssw0rd'));

    const param = new HttpParams().set('routePath', this.txtroutepathStr)  //"A-B-C-G-H-I-D"
    this.httpClient.get(this.urlSearchbyroutepath, { headers: header, params: param })
      .subscribe(
        data => {

          console.log(data);
          this.notSure = data;

          if (this.notSure.MessageDes == "Can not found this route path. Please try any route path again.") {
            this.isShow = false;
            this.hasData = true;
          } else {
            this.ResultByRoutepath = this.notSure.Cost;
            this.ResultByRoutepathStr = this.notSure.Routepath;
          }

        },
        error => {
          console.log(error.error.message);
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
  }


  onShortestPath() {

    if (this.source === undefined || this.destination === undefined) {
      return;
    }
    this.isShow = true;
    this.mode = 'b';

    this.apiService.restApiSendParmHasHeader(this.urlShortestPath, { "source": this.source, "destination": this.destination })
      .subscribe(
        data => {
          console.log(data);
          this.notSure = data;
          this.ResultByRoutepath = this.notSure.Cost;
          this.ResultByRoutepathStr = this.notSure.Routepath;
        },
        error => {
          console.log(error.error.message);
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })

        });
  }

}
