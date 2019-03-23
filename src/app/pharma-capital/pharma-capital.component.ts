import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-pharma-capital',
  templateUrl: './pharma-capital.component.html',
  styleUrls: ['./pharma-capital.component.css']
})
export class PharmaCapitalComponent implements OnInit {

  date: DateModel;
  options: DatePickerOptions = {
    format: 'DD-MM-YYYY',
  };
  submitted = false; //form not submited : default
  disname: string;
  disaddress: string;
  record:object;
  mname: string;
  cname:string;
  msize:string;
  ordertypes:any[];
  orderdate:string;
  deliverydate:string;
  tamt:number;
  amtpaid:number;
  discount:string;
  dueamt:number;
  errorMessage:string;
  stateValue:string;
  successMessage:string = "";
  formatteddate:string;
  flag:boolean=true;
  constructor(private pharmaService: PharmaService) {
    this.options = new DatePickerOptions();
    this.ordertypes=['Pickup','InPerson','phone','Delivery'];
  }

  ngOnInit() {
  }

isValues():number{

      if(this.tamt &&  this.amtpaid)
         this.dueamt=this.tamt-this.amtpaid;
      return this.dueamt;
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
      .postShortage('http://localhost:3002/capital', this.record)
      .subscribe(
        result =>this.successMessage="Capital  successfully Entered!!",
        error => this.errorMessage = <any>error
      );
  }

}
