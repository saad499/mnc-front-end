import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {
  host = environment.host;
  constructor(private http:HttpClient) {

   }
   get(url){
    return this.http.get(environment.host+url);
   }
   post(url,data){
    return this.http.post(environment.host+url,data);
   }
   posth(url,data,h){
    return this.http.post(environment.host+url,data,h);
   }

}
