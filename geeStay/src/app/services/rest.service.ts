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

  getEmployeeByEmail(email:string){
    return this.http.get<any>(this.envUrl+"employee/"+email.replace(/@/g, '%40'));
  }

  getQuestions(){
    return this.http.get<any>(this.envUrl+"question");
  }

  saveFeedback(feedbackResponse:any){
    return this.http.post<any>(this.envUrl+"feedback", feedbackResponse);
  }

  getFeedbackByEmail(email:string){
    return this.http.get<any>(this.envUrl+"feedback/"+email.replace(/@/g, '%40'));
  }

  hello(){
    return this.http.get<any>(this.envUrl+"helloworld");
  }
}
