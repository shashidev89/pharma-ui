import { Component, OnInit } from '@angular/core';
import { PharmaService } from 'app/shared/pharma.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';


@Component({
  selector: 'app-pharma-mainsales',
  templateUrl: './pharma-mainsales.component.html',
  styleUrls: ['./pharma-mainsales.component.css']
})
export class PharmaMainsalesComponent implements OnInit {

  date: DateModel;
  options: DatePickerOptions = {
    format: 'DD-MM-YYYY'
  };
  constructor(private pharmaService: PharmaService) {
    this.options = new DatePickerOptions();

  }

  ngOnInit() {
  }

  submitted = false; //form not submited : default
  data: string; //this variable contains our data
  record:object;
  fname: string;
  amount:number;
  credit:number;
  cash:number;
  userdate:string;
  medicine:string;
  general:string;
  errorMessage:string;
  successMessage:string = "";
  formatteddate:string;



  logForm(value: any) {
    console.log(value);
    console.log(value.fname);
    console.log(value.userdate.formatted)

    this.record=   {

      "firstname":value.fname,
      "userdate":value.userdate.formatted,
      "amount":value.amount,
      "debit":value.debit,
      "cash":value.cash,
      "medicine":value.medicine,
      "general":value.general

    }
    console.log(this.record);
    this.pharmaService
      .postSales('http://localhost:3001/sales', this.record)
      .subscribe(
        result =>this.successMessage="sales created successfully !!",
        error => this.errorMessage = <any>error
      );
  }




}
