import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ToastService } from '../../util/ToastService';

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

  qnaObj: any;
  qnaCatList = new Set<string>();
  isDisabled = false;

  constructor(private restService: RestService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  // employeeInterestQnA: QnA[] = [{ questioncontent: "What do you look forward to most when you come to work every day?" },
  // { questioncontent: "What do you like least about working here?" },
  // { questioncontent: "What you recommend our company to job-seeking friends? Why (not)?" },
  // { questioncontent: "What would tempt you to leave the company?" }] as QnA[];

  // jobQnA: QnA[] = [{ questioncontent: "What is the best part of job?" },
  // { questioncontent: "Which of your talents are not being used in your current role?" },
  // { questioncontent: "What would make your job even more satisfying?" },
  // { questioncontent: "Do you feel you'are getting clear goals and objectives?" },
  // { questioncontent: "What can I do to make your exeprience better?" },
  // { questioncontent: "What do you think of the L&D opportunities that are available to you?" },
  // { questioncontent: "Are you havppy with current compensation or yearly revisions offred by company to you?" },
  // { questioncontent: "Within past year, what was a day that caused you anxiety or frustration?" },
  // { questioncontent: "What does your dream job look like?" },
  // { questioncontent: "What did you love about your last job that you no longer have?" }] as QnA[];


  // cultureQnA: QnA[] = [{ questioncontent: "Do you feel valued and recognised in the company?" },
  // { questioncontent: "How would you like to be recognized for your work?" },
  // { questioncontent: "What are we currently not doing as a company that you feel we should?" }] as QnA[];


  // workEnvQnA: QnA[] = [{ questioncontent: "What do you feel we should definitely change about or add to our work environment?" },
  // { questioncontent: "Do you get enough support when required from other team members for project related activities in case you get stuck or not aware of?" },
  // { questioncontent: "How would you rate our work-life balance? How could it be improved?" }] as QnA[];


  // techQnA: QnA[] = [{ questioncontent: "Do ou have enough tools and resources to do your job properly? if not, what is missing?" },
  // { questioncontent: "Are we using outdated technology stack for our applications?" }] as QnA[];


  search() {
    this.restService.hello().subscribe((result: any) => {
      console.log(result);
    },
      (error: any) => {
        console.log(error);
      });

    this.restService.getEmployeeByEmail(this.email).subscribe(result => {
      this.firstName = result['firstname'];
      this.lastName = result['lastname'];
      this.email = result['email'];
      this.hireDate = result['hiredate'];
      this.managerEmail = result['manageremail'];
      this.department = result['departmentname'];
      this.isDataLoaded = true;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
    this.getQuestions();
  }

  getQuestions() {
    this.qnaObj = {};
    this.qnaCatList = new Set<string>();
    this.restService.getQuestions().subscribe((result: any) => {
      result.forEach(element => {
        this.qnaCatList.add(element['questioncategory']);
        if (this.qnaObj[element['questioncategory']]) {
          this.qnaObj[element['questioncategory']].push({
            questioncategory: element['questioncategory'], questionid: element['questionid']
            , questioncontent: element['questioncontent'], answer: ""
          });
        } else {
          this.qnaObj[element['questioncategory']] = [{
            questioncategory: element['questioncategory'],
            questionid: element['questionid'], questioncontent: element['questioncontent'], answer: ""
          }];
        }
      });
    }, (error: any) => {
      console.log(error);

    });
  }

  submit() {
    this.errorMsg = "";
    if (this.mandatoryCheck()) {
      //Sumbit to database
      this.isDisabled = true;
      let feedbackResponse=new Object();
      feedbackResponse[this.email] = new Object();
      for (let qna in this.qnaObj) {
        this.qnaObj[qna].filter(e => !this.isEmptyString(e['answer'])).forEach(element => {
          feedbackResponse[this.email][element['questionid']]=element['answer'];
        });
      }
      this.restService.saveFeedback(feedbackResponse).subscribe(result=>{
      this.reset();
      this.toastService.showToast("Success");
      },(error)=>{
        this.isDisabled = false;
        this.toastService.showToast("Error Occurred", false);        
        console.log(error);
      });
    }
  }

  mandatoryCheck() {
    // let candidateMissingList: string[] = [];
    // if (this.isEmptyString(this.firstName)) {
    //   candidateMissingList.push("First Name");
    // }
    // if (this.isEmptyString(this.lastName)) {
    //   candidateMissingList.push("Last Name");
    // }
    // if (this.isEmptyString(this.email)) {
    //   candidateMissingList.push("Email");
    // }
    // if (this.isEmptyString(this.managerEmail)) {
    //   candidateMissingList.push("Manager Name");
    // }
    // if (!this.hireDate) {
    //   candidateMissingList.push("Connect Date");
    // }
    // if (this.isEmptyString(this.department)) {
    //   candidateMissingList.push("Department");
    // }

    let missingTabAnsList: string[] = [];
    for (let qna in this.qnaObj) {
      if (this.qnaObj[qna].filter(e => !this.isEmptyString(e['answer'])).length == 0) {
        missingTabAnsList.push(qna);
      }
    }
    // if (this.employeeInterestQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
    //   missingTabAnsList.push("Employee Interest");
    // }
    // if (this.jobQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
    //   missingTabAnsList.push("Job");
    // }
    // if (this.cultureQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
    //   missingTabAnsList.push("Culture");
    // }
    // if (this.workEnvQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
    //   missingTabAnsList.push("Work Environment");
    // }
    // if (this.techQnA.filter(e => !this.isEmptyString(e.answer)).length == 0) {
    //   missingTabAnsList.push("Technology");
    // }

    // if (candidateMissingList.length > 0) {
    //   this.errorMsg = "Please fill the mandatory values : " + candidateMissingList.join(", ") + "<br>";
    // }

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
    this.isDisabled = false;

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

export interface QnA {
  questioncategory: string;
  questioncontent: string;
  questionid: string;
  answer: string;
}
