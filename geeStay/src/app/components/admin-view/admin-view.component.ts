import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  hireDate: NgbDateStruct;
  today = this.calendar.getToday();

  firstName: string="";
  lastName: string="";
  email: string="";
  managerEmail: string="";
  department: string="";
  errorMsg:string;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  submit(){      
    this.errorMsg="";
    if(this.mandatoryCheck()){
      //Sumbit to database
    }
  }

  mandatoryCheck(){
    let candidateMissingList:string[] = [];
    if(this.isEmptyString(this.firstName)){
      candidateMissingList.push("First Name");
    }
    if(this.isEmptyString(this.lastName)){
      candidateMissingList.push("Last Name");
    }
    if(this.isEmptyString(this.email)){
      candidateMissingList.push("Email");
    }
    if(this.isEmptyString(this.managerEmail)){
      candidateMissingList.push("Manager Email");
    }
    if(!this.hireDate){
      candidateMissingList.push("Hire Date");
    }
    if(this.isEmptyString(this.department)){
      candidateMissingList.push("Department");
    }

    if(candidateMissingList.length > 0){
      this.errorMsg = "Please fill the mandatory values : "+candidateMissingList.join(", ")+"<br>";
    }

    return this.isEmptyString(this.errorMsg);
  }

  reset(){
    this.errorMsg = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.managerEmail = "";
    this.hireDate = {} as NgbDateStruct;
    this.department = "";

  }

  isEmptyString(s:any){
    if(s && s!=null && s.toString().trim().length>0){
      return false;
    }
    return true;
  }

}
