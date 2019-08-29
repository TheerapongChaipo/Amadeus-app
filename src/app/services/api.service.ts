import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  restApiSendParm(url: string, data: any) {
    return this.http.post<any[]>(`${url}`, data);
  }

  restApi(url: string) {
    return this.http.post<any[]>(`${url}`, '');
  }

  restApiSendParmHeader2(url: string, data: any, header: any) {
    return this.http.post<any[]>(`${url}`, data,header);
  }

  // การ set header ในการ call api
  restApiSendParmHasHeader(url: string, data: any) {   
    var header = new HttpHeaders(); 

    
    header = header.append('Authorization', 'Basic ' + btoa('amdtest:p@ssw0rd'));
    //header = header.append('Authorization', 'Bearer ' + localStorage.getItem('t')); 
    header = header.append('Content-Type', 'application/json; charset=utf-8'); 

    return this.http.post(url, data, { headers : header }).pipe(
      tap(snap => {
        return snap;
      })
    );
  } 
}
