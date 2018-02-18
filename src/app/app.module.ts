import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import {AuthenticationService} from './authentication.service';

import { TokenInterceptor } from './token.interceptor';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { SignupFormComponent } from './signup-form/signup-form.component';

const appRoutes:Routes=[
  {
    path:'',
    component:LoginFormComponent
  },
  {path:'home',
  canActivate:[AuthguardGuard],
  component:HomeComponent
  },
  {path:'signup-form',
  canActivate:[AuthguardGuard],
  component:SignupFormComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    HomeComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  },
  AuthenticationService,
  AuthguardGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
