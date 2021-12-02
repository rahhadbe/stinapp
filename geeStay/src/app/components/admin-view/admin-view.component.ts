import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatter } from '../../util/CustomDateParserFormatter';
import { RestService } from '../../services/rest.service';
import { ToastService } from '../../util/ToastService';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }]
})
export class AdminViewComponent implements OnInit {

  hireDate: NgbDateStruct;
  today = this.calendar.getToday();

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  managerEmail: string = "";
  department: string = "";
  errorMsg: string;
  successMsg: string;
  isDisabled = false;

  constructor(private calendar: NgbCalendar, private restService: RestService,
    private toastService: ToastService) { }

  ngOnInit(): void {
  }

  submit() {
    this.errorMsg = "";
    if (this.mandatoryCheck()) {
      //Sumbit to database
  
   this.restService.hello().subscribe((result:any)=>{
        console.log(result);
      },
    (error:any)=>{
      console.log(error);
    });



      this.isDisabled = true;
      this.restService.addEmployee({
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.email,
        managerhrid: 123,
        // hireDate: this.hireDate['day'] + "/" + this.hireDate['month'] + "/" + this.hireDate['year'],
        departmentname: this.department
      }).subscribe((result: any) => {
        this.toastService.showToast("Success");
        this.reset();
      },
        (error: any) => {
          this.toastService.showToast("Error occurred", false);
          this.isDisabled = false;
          console.log(error);
        });

    
    } else {
      this.isDisabled = false;
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
      candidateMissingList.push("Manager Email");
    }
    if (!this.hireDate) {
      candidateMissingList.push("Hire Date");
    }
    if (this.isEmptyString(this.department)) {
      candidateMissingList.push("Department");
    }

    if (candidateMissingList.length > 0) {
      this.errorMsg = "Please fill the mandatory values : " + candidateMissingList.join(", ") + "<br>";
    }

    return this.isEmptyString(this.errorMsg);
  }

  reset() {

    this.errorMsg = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.managerEmail = "";
    this.hireDate = {} as NgbDateStruct;
    this.department = "";
    this.isDisabled = false;

  }

  isEmptyString(s: any) {
    if (s && s != null && s.toString().trim().length > 0) {
      return false;
    }
    return true;
  }

}
