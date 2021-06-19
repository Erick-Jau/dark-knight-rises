import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceUrl = 'http://localhost:40000/api/';
  constructor(private http:HttpClient) { }

    //Alta Usuario
    public getFromApi() {

      return this.http.get(this.serviceUrl + 'myGetEndpoint/');

    }

    //trae token
    public postToAPi(data) {

      return this.http.post(this.serviceUrl + 'myPostEndpoint/', data);

    }



}
