import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApploginService {

  private LoginMethodsUrl = 'https://sgs.service.iscsystem.com/ServiceManagement/LoginMethods';
  private LoginMethodsConteconUrl = 'http://173.249.0.65:8080/PortalProjectControl/LoginMethods';

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('method', 'loginUser')
      .set('email', email)
      .set('password', password)
      .set('name', '')
      .set('type', 'aplication')
      .set('remenber', 'false')
      .set('canal', 'app');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.LoginMethodsUrl, body.toString(), { headers: headers });
  }

  loginUserContecon(email: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('method', 'loginUser')
      .set('email', email)
      .set('password', password)
      .set('name', '')
      .set('type', 'aplication')
      .set('remenber', 'false')
      .set('canal', 'app');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.LoginMethodsConteconUrl, body.toString(), { headers: headers });
  }

}
