import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private authenticationService:AuthenticationService,private router:Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authenticationService.getUserLoggedIn()){

        return true;
      }
      this.router.navigate(['']);
      return false;
   // return this.authenticationService.getUserLoggedIn();
  }
}
