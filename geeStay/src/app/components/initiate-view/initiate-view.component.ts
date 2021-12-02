import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate-view',
  templateUrl: './initiate-view.component.html',
  styleUrls: ['./initiate-view.component.scss']
})
export class InitiateViewComponent implements OnInit {

  activeTab = 1;
  hireDate: string;

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  managerEmail: string = "";
  department: string = "";

  errorMsg: string;

  isDataLoaded = false;

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
    this.isDataLoaded = true;
  }

  submit() {
    this.errorMsg = "";
    if (this.mandatoryCheck()) {
      //Sumbit to database
    }
  }

  mandatoryCheck() {
    let candidateMissingList: string[] = [];
    if (this.isEmptyString(this.firstName)) {
      candidateMissingList.push("First Name");
    }
    if (this.isEmptyString(this.lastName)) {
      candidateMissingList.push("Last Name");
    }
    if (this.isEmptyString(this.email)) {
      candidateMissingList.push("Email");
    }
    if (this.isEmptyString(this.managerEmail)) {
      candidateMissingList.push("Manager Name");
    }
    if (!this.hireDate) {
      candidateMissingList.push("Connect Date");
    }
    if (this.isEmptyString(this.department)) {
      candidateMissingList.push("Department");
    }

    let missingTabAnsList: string[] = [];

    if (this.employeeInterestQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
      missingTabAnsList.push("Employee Interest");
    }
    if (this.jobQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
      missingTabAnsList.push("Job");
    }
    if (this.cultureQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
      missingTabAnsList.push("Culture");
    }
    if (this.workEnvQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
      missingTabAnsList.push("Work Environment");
    }
    if (this.techQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
      missingTabAnsList.push("Technology");
    }

    if (candidateMissingList.length > 0) {
      this.errorMsg = "Please fill the mandatory values : " + candidateMissingList.join(", ") + "<br>";
    }

    if (missingTabAnsList.length > 0) {
      this.errorMsg += "Please answer at least one question from each " + missingTabAnsList.join(", ");
    }

    return this.isEmptyString(this.errorMsg);
  }

  reset() {
    this.isDataLoaded = false;
    this.activeTab = 1;
    this.errorMsg = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.managerEmail = "";
    this.hireDate = "";
    this.department = "";

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

export interface QnA {
  category: string;
  question: string;
  answer: string;
}
