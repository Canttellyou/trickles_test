import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { OTPInterface, SignupInterface } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private http: HttpClient) {}
  prodURL = 'https://trickles-test-api.anmgw.com/v3';
  idURL = 'http://159.8.238.90:7036';

  //API Calling
  // login(payload: LoginInterface): Observable<any> {
  //   return this.http.post('', payload);
  // }

  signup(payload: SignupInterface): Observable<any> {
    return this.http.post(`${this.prodURL}/cust_signup`, payload);
  }

  sendOTP(payload: OTPInterface) {
    console.log(payload);

    this.http
      .post(`${this.prodURL}/cust_mfa_req`, payload)
      .subscribe((response) => console.log(response));
  }

  getIDTypes(): Observable<any> {
    return this.http.get(`${this.idURL}/get_id_types`);
  }

  forgotPassword(): void {}

  signout(): void {}
}
