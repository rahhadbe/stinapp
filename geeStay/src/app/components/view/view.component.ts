import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { QnA } from '../initiate-view/initiate-view.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit { 

  
  email: string = "";

  isEmployeeDataLoaded = false;
  isFeedbackDataLoaded = false;

  feedbackList: any[] = [];
  feedbackData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  employeeInterestQnA: QnA[] = [{ question: "What do you look forward to most when you come to work every day?" },
  { question: "What do you like least about working here?" },
  { question: "What you recommend our company to job-seeking friends? Why (not)?" },
  { question: "What would tempt you to leave the company?" }] as QnA[];

  jobQnA: QnA[] = [{ question: "What is the best part of job?" },
  { question: "Which of your talents are not being used in your current role?" },
  { question: "What would make your job even more satisfying?" },
  { question: "Do you feel you'are getting clear goals and objectives?" },
  { question: "What can I do to make your exeprience better?" },
  { question: "What do you think of the L&D opportunities that are available to you?" },
  { question: "Are you havppy with current compensation or yearly revisions offred by company to you?" },
  { question: "Within past year, what was a day that caused you anxiety or frustration?" },
  { question: "What does your dream job look like?" },
  { question: "What did you love about your last job that you no longer have?" }] as QnA[];


  cultureQnA: QnA[] = [{ question: "Do you feel valued and recognised in the company?" },
  { question: "How would you like to be recognized for your work?" },
  { question: "What are we currently not doing as a company that you feel we should?" }] as QnA[];


  workEnvQnA: QnA[] = [{ question: "What do you feel we should definitely change about or add to our work environment?" },
  { question: "Do you get enough support when required from other team members for project related activities in case you get stuck or not aware of?" },
  { question: "How would you rate our work-life balance? How could it be improved?" }] as QnA[];


  techQnA: QnA[] = [{ question: "Do ou have enough tools and resources to do your job properly? if not, what is missing?" },
  { question: "Are we using outdated technology stack for our applications?" }] as QnA[];


  search() {
    this.isFeedbackDataLoaded = false;
    this.isEmployeeDataLoaded = true;
    this.feedbackList = [{ feedbackId: "1234", managerEmail: "abn@abc.com", connectDate: "12-Jun-2020" },
    { feedbackId: "1111", managerEmail: "abn@abcsd.com", connectDate: "14-Jun-2020" }];
  }

  viewFeedback(feedback: any) {
    this.isFeedbackDataLoaded = true;
    this.feedbackData.push(...this.employeeInterestQnA, ...this.jobQnA, ...this.cultureQnA, ...this.workEnvQnA, ...this.techQnA );
  }

  reset() {
    this.isEmployeeDataLoaded = false;
    this.isFeedbackDataLoaded = false;

    this.employeeInterestQnA.forEach(element => {
      element.answer = "";
    });
    this.jobQnA.forEach(element => {
      element.answer = "";
    });
    this.cultureQnA.forEach(element => {
      element.answer = "";
    });
    this.workEnvQnA.forEach(element => {
      element.answer = "";
    });
    this.techQnA.forEach(element => {
      element.answer = "";
    });

  }

  isEmptyString(s: any) {
    if (s && s != null && s.toString().trim().length > 0) {
      return false;
    }
    return true;
  }

}
