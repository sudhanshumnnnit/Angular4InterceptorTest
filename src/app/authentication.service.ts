import { Injectable } from '@angular/core';
  

@Injectable()
export class AuthenticationService {

  private isUserLoggedIn;
  public username;
  private userToken;

  constructor() {
    this.isUserLoggedIn=false;
    
   }

   setUserLoggedIn(){
    this.isUserLoggedIn=true;
    this.username='admin';
   }

   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }


}
