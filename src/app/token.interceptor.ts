import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    token:string='ADSDFD#$%$%FFFGGHGH&%%$#DFVDCXCXXV122343545';
   
    intercept(req:HttpRequest<any>,next :HttpHandler):Observable<HttpEvent<any>>{
        console.log("interceptor called");
        let _req=req.clone(

            { setHeaders: { Authorization: this.token }
        });
        return next.handle(_req)
        .do((event:HttpEvent<any>)=>{
            if(event instanceof HttpResponse){
                console.log("http request is succeed");
            }
        },(err:any)=>{
            if(err instanceof HttpErrorResponse){
                console.log("request failed",err);
                if(err.status===401){
                    console.log("user not aurhorised");
                    console.log("redirect to login page or remove the token from localstorage");
                }
            }
        });
    }
}