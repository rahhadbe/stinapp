import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../services/rest.service';
// import { QnA } from '../initiate-view/initiate-view.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit { 

  
  email: string = "";

  isEmployeeDataLoaded = false;
  isFeedbackDataLoaded = false;

  feedbackDataList: any[] = [];
  feedbackData: any[] = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }


 

  search() {
    this.isFeedbackDataLoaded = false;
    this.restService.hello().subscribe((result: any) => {
      console.log(result);
    },
      (error: any) => {
        console.log(error);
      });
    this.restService.getFeedbackByEmail(this.email).subscribe((result: any) => {
      this.feedbackDataList = result;
      this.isEmployeeDataLoaded = true;
      console.log(result);
    },
    (error: any) => {
      console.log(error);
    });
    
  }

  viewFeedback(feedback: any) {
    this.feedbackData = feedback['feedbackList'];
    this.isFeedbackDataLoaded = true;
    // this.feedbackData.push(...this.employeeInterestQnA, ...this.jobQnA, ...this.cultureQnA, ...this.workEnvQnA, ...this.techQnA );
  }

  reset() {
    this.isEmployeeDataLoaded = false;
    this.isFeedbackDataLoaded = false;
    this.feedbackDataList = [];
    this.feedbackData = [];

    // this.employeeInterestQnA.forEach(element => {
    //   element.answer = "";
    // });
    // this.jobQnA.forEach(element => {
    //   element.answer = "";
    // });
    // this.cultureQnA.forEach(element => {
    //   element.answer = "";
    // });
    // this.workEnvQnA.forEach(element => {
    //   element.answer = "";
    // });
    // this.techQnA.forEach(element => {
    //   element.answer = "";
    // });

  }

  isEmptyString(s: any) {
    if (s && s != null && s.toString().trim().length > 0) {
      return false;
    }
    return true;
  }

}
