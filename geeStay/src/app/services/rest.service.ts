import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  envUrl:string;
  constructor(private http: HttpClient) { 
    this.envUrl = environment.envUrl;
  }

  addEmployee(employee:any){
    return this.http.post<any>(this.envUrl+"employee", employee);
  }

  hello(){
    return this.http.get<any>(this.envUrl+"helloworld");
  }
}
