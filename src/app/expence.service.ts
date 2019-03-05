import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class ExpenceService {

  constructor(private ht:HttpClient){ }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  addExpences(expData):Observable<any>
  {
      return this.ht.post<any>('http://localhost:3010/api/expences?token='+localStorage.getItem('token'),expData).pipe(map(this.extractData));
      //return this.ht.post<any>('http://localhost:3010/api/expences?'+localStorage.getItem('token'),expData).pipe(map());
  }
  getExpences():Observable<any>
  {
      return this.ht.get<any>('http://localhost:3010/api/expences?token='+localStorage.getItem('token')).pipe(map(this.extractData));
  }

  deleteExpences(id):Observable<any>
  {
    return this.ht.delete<any>('http://localhost:3010/api/expences/'+id+'?token='+localStorage.getItem('token')).pipe(map(this.extractData));
  }

  updateExpences(id,expData):Observable<any>
  {
    return this.ht.put<any>('http://localhost:3010/api/expences/'+id+'?token='+localStorage.getItem('token'),expData).pipe(map(this.extractData));
  }
  getExpencesById(id):Observable<any>
  {
    return this.ht.get<any>('http://localhost:3010/api/expences/'+id+'?token='+localStorage.getItem('token')).pipe(map(this.extractData));
  }
  

}
