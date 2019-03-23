//our root app component
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
//import {Observable} from '@rxjs/Observable';
// import {Observer} from '@rxjs/Observer';
//import 'rxjs/Rx';

@Component({
  selector: 'app-pharma-login',
  templateUrl: './pharma-login.component.html',
  styleUrls: ['./pharma-login.component.css']
})
export class PharmaLoginComponent implements OnInit {
  levelNum:number;
  data:Array<any>;
  name: string;
  password:string;
  valid:boolean;
// public userDetails:Array<any>= [
  //   {id: 1, username: "shashi",password:"password"},
  //   {id: 2, username: "billy",password:"password"},
  //   {id: 3, username: "alan",password:"password"},
  //   {id: 4, username: "edsheeren",password:"password"},
  // ];
  loginDetails:Array<any>=[];
  constructor(private pharma:PharmaService) { }

  ngOnInit() {
    this.pharma.getService().subscribe((data) => {
      this.data=data;

      // console.log(this.data);

    });
  }
  onSubmit() {
    this.valid=false;
    for (let i = 0; i < this.data.length; i++) {
      let a = this.data[i];

      if (a.username === this.name && a.password === this.password) {
        this.valid=true;
        break;
      }

    }
    if(this.valid) {
      alert("user logged in !!");
      this.name="";
      this.password="";
    }
    else {
      alert("enter correct user credentials");
      this.name="";
      this.password="";

    }

    // onSubmit() {
    //   this.valid=false;
    //   for (let i = 0; i < this.userDetails.length; i++) {
    //     let a = this.userDetails[i];
    //
    //     if (a.username === this.name && a.password === this.password) {
    //       this.valid=true;
    //       break;
    //     }
    //
    //   }
    //   if(this.valid) {
    //     alert("user logged in !!");
    //     this.name="";
    //     this.password="";
    //   }
    //   else {
    //     alert("enter correct user credentials");
    //     this.name="";
    //     this.password="";
    //
    //   }

    // this.loginDetails.push({
    //   "username" : this.name,
    //   "password" : this.password
    // });

  }

}
