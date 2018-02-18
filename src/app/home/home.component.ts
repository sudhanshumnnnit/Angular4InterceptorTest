import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user:any={};
  public loggedInUser;
  constructor(private authenticationService:AuthenticationService,private _userService:UserService) { }

  ngOnInit() {
    this.loggedInUser=this.authenticationService.username;
    this._userService.getUserProfile()
    .subscribe(data=>{
      console.log("usersData",data);
      this.user=data;

      //store mock data into localstorage here
    },err=>{
      console.error(err);
    });
  }

}
