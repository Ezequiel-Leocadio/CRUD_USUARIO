import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUser } from '../model/responseUser.model';
import { UserModal } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3333';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(
    private httpClient:HttpClient
  ) { }

  public getUser(flag:string):Observable<ResponseUser>{
    return this.httpClient.get<ResponseUser>(this.apiUrl+'/userlist')
  }

  public postUser(user:any):Observable<UserModal>{
    return this.httpClient.post<UserModal>(this.apiUrl + '/usercreat',user);
  }
}
