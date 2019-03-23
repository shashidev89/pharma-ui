import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-pharma-shortage',
  templateUrl: './pharma-shortage.component.html',
  styleUrls: ['./pharma-shortage.component.css']
})
export class PharmaShortageComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions = {
    format: 'DD-MM-YYYY',
  };
  submitted = false; //form not submited : default
  data: string; //this variable contains our data
  record:object;
  mname: string;
  cname:string;
  msize:string;
  mtypes:any[];
  createdate:string;
  priority:string;
  errorMessage:string;
  stateValue:string;
  successMessage:string = "";
  formatteddate:string;
  constructor(private pharmaService: PharmaService) {
    this.options = new DatePickerOptions();
    this.mtypes=['Tablet','capsules','Syrup','Ointment','Bandages','Lotion','Soap','Other'];
  }

  ngOnInit() {
  }


  logForm(value: any) {
    console.log(value);

    this.record = {

      "id": Math.floor((Math.random() * 100) + 1),
      "medicinename": value.mname,
      "companyname": value.cname,
      "medicinesize": value.msize,
      "quantity": value.quantity,
      "orderdate": value.createdate,
      "priority":value.priority,
      "medicinetype":value.mtype,

    }
    console.log(this.record);

    this.pharmaService
      .postShortage('http://localhost:3001/shortage', this.record)
      .subscribe(
        result =>this.successMessage="Shortage  successfully Entered!!",
        error => this.errorMessage = <any>error
      );
  }
}
