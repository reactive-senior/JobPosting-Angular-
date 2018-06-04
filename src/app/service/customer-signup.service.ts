import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { config } from "../config";

@Injectable()
export class CustomerSignupService {

  httpHeader: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    });
  }

  doSignUp(data: { username: string, password: string }) {
    let desURL = config.RESTUrl + config.authUrl + config.customer_auth + config.customer_signup;
    let customer_info = {
      "username": data.username,
      "password": data.password
    }
    return this.http.post(desURL, customer_info, { headers: this.httpHeader });
  }

}
