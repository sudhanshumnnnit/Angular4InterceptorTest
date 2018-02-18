import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {UserData } from './user.model';




@Injectable()
export class UserService {

  constructor(private _httpClient: HttpClient) { }
  getUsers():Observable<UserData>{
    return this._httpClient.get<UserData>('assets/user.json');
  }

  getUserProfile():Observable<any>{
    return this._httpClient.get<any>('assets/userProfile.json');
  }

}
