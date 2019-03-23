import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-pharma-shortage-update',
  templateUrl: './pharma-shortage-update.component.html',
  styleUrls: ['./pharma-shortage-update.component.css']
})
export class PharmaShortageUpdateComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions = {
    format: 'DD-MM-YYYY',
  };
  submitted = false; //form not submited : default
  data: any; //this variable contains our data
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
  shortageId:number;
  quantity:number;
  type:string;
  constructor(private pharmaService: PharmaService,private activatedRoute: ActivatedRoute) {
    this.options = new DatePickerOptions();
    this.mtypes=['Tablet','capsules','Syrup','Ointment','Bandages','Lotion','Soap','Other'];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.shortageId = params['id'];
      // alert(userId);
    });
    this.pharmaService.getShortageId(this.shortageId).subscribe((data) => {
      this.data=data;
        this.mname=this.data.medicinename;
        this.cname=this.data.companyname;
        this.msize=this.data.medicinesize;
        this.quantity=this.data.quantity;
        this.createdate=this.data.orderdate;
        this.priority=this.data.priority;
        this.type=this.data.medicinetype;

    });

  }

  logForm(value: any) {
    console.log(value);

    this.record = {

      "id":this.shortageId,
      "medicinename": value.mname,
      "companyname": value.cname,
      "medicinesize": value.msize,
      "quantity": value.quantity,
      "orderdate": value.createdate,
      "priority":value.priority,
      "medicinetype":value.type,

    }
    console.log(this.record);

    this.pharmaService
      .updateShortage(this.shortageId, this.record)
      .subscribe(
        result =>{this.successMessage="Shortage  successfully Updated!!"},
        error => {this.errorMessage = <any>error}
      );
  }
}
