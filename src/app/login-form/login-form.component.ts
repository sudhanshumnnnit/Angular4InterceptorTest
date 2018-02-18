import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserData } from '../user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public userObj:UserData;
  constructor(private authenticationService:AuthenticationService,private router:Router,private _userService:UserService) { }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;

  	if(username == this.userObj.userName && password == this.userObj.password) {
      this.authenticationService.setUserLoggedIn();
      //localStorage.setItem("auth_token",this.userObj.authToken);
  		this.router.navigate(['home']);
  	}
  }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(data=>{
      console.log("login called");
      console.log("Users",data);
      this.userObj=data;
      //localStorage.setItem("auth_token", "2322325799366");
      localStorage.setItem("auth_token",this.userObj.authToken);
      //storing mock data into localstorage here
    },err=>{
      console.log(err);
    });
  }

}
