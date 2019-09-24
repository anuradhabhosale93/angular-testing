import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

const apiurl = 'http://localhost:3010/api/auth/signup';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public ht: HttpClient) { }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  //display:boolean=false;

  newRegister(regData): Observable<any> {
    console.log(regData);
    return this.ht.post<any>('http://localhost:3090/auth/signup', regData).pipe(
      map((regData) => console.log(`added w/ id=${regData.id}`)),
    );
  }

  login(logindata): Observable<any> {
    console.log("call2");
    return this.ht.post<any>('http://localhost:3090/auth/signin', logindata).pipe(map((this.extractData)));
  }
}
