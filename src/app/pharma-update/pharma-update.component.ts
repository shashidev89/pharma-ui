import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-pharma-update',
  templateUrl: './pharma-update.component.html',
  styleUrls: ['./pharma-update.component.css']
})
export class PharmaUpdateComponent implements OnInit {
  id: number;
  userId:number;
  dataUser:any;
  private sub: any;
  date: DateModel;
  submitted = false; //form not submited : default
  data: string; //this variable contains our data
  record:object;
  fname: string;
  lname:string;
  address:string;
  city:string;
  state:string;
  zipcode:number;
  userdate:string;
  username:string;
  password:string;
  errorMessage:string;
  stateValue:string;
  successMessage:string = "";
  formatteddate:string;
  baseurl:any;

  options: DatePickerOptions = {
    format: 'DD-MM-YYYY'
  };
  constructor(private pharmaService: PharmaService,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.options = new DatePickerOptions();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
     // alert(userId);
    });
    this.pharmaService.getUser(this.userId).subscribe((data) => {
      this.dataUser=data;
      // alert( this.dataUser.firstname);
      this.fname=this.dataUser.firstname;
      this.lname=this.dataUser.lastname;
      this.username=this.dataUser.username;
      this.password=this.dataUser.password;
      this.userdate=this.dataUser.userdate;
      this.address=this.dataUser.address;
      this.city=this.dataUser.city;
      this.stateValue=this.dataUser.state;
      this.zipcode=this.dataUser.zipcode;

    });
  }

  public states:Array<Object> = [


    {
      "name": "Alabama",
      "abbreviation": "AL"
    },
    {
      "name": "Alaska",
      "abbreviation": "AK"
    },
    {
      "name": "American Samoa",
      "abbreviation": "AS"
    },
    {
      "name": "Arizona",
      "abbreviation": "AZ"
    },
    {
      "name": "Arkansas",
      "abbreviation": "AR"
    },
    {
      "name": "California",
      "abbreviation": "CA"
    },
    {
      "name": "Colorado",
      "abbreviation": "CO"
    },
    {
      "name": "Connecticut",
      "abbreviation": "CT"
    },
    {
      "name": "Delaware",
      "abbreviation": "DE"
    },
    {
      "name": "District Of Columbia",
      "abbreviation": "DC"
    },
    {
      "name": "Federated States Of Micronesia",
      "abbreviation": "FM"
    },
    {
      "name": "Florida",
      "abbreviation": "FL"
    },
    {
      "name": "Georgia",
      "abbreviation": "GA"
    },
    {
      "name": "Guam",
      "abbreviation": "GU"
    },
    {
      "name": "Hawaii",
      "abbreviation": "HI"
    },
    {
      "name": "Idaho",
      "abbreviation": "ID"
    },
    {
      "name": "Illinois",
      "abbreviation": "IL"
    },
    {
      "name": "Indiana",
      "abbreviation": "IN"
    },
    {
      "name": "Iowa",
      "abbreviation": "IA"
    },
    {
      "name": "Kansas",
      "abbreviation": "KS"
    },
    {
      "name": "Kentucky",
      "abbreviation": "KY"
    },
    {
      "name": "Louisiana",
      "abbreviation": "LA"
    },
    {
      "name": "Maine",
      "abbreviation": "ME"
    },
    {
      "name": "Marshall Islands",
      "abbreviation": "MH"
    },
    {
      "name": "Maryland",
      "abbreviation": "MD"
    },
    {
      "name": "Massachusetts",
      "abbreviation": "MA"
    },
    {
      "name": "Michigan",
      "abbreviation": "MI"
    },
    {
      "name": "Minnesota",
      "abbreviation": "MN"
    },
    {
      "name": "Mississippi",
      "abbreviation": "MS"
    },
    {
      "name": "Missouri",
      "abbreviation": "MO"
    },
    {
      "name": "Montana",
      "abbreviation": "MT"
    },
    {
      "name": "Nebraska",
      "abbreviation": "NE"
    },
    {
      "name": "Nevada",
      "abbreviation": "NV"
    },
    {
      "name": "New Hampshire",
      "abbreviation": "NH"
    },
    {
      "name": "New Jersey",
      "abbreviation": "NJ"
    },
    {
      "name": "New Mexico",
      "abbreviation": "NM"
    },
    {
      "name": "New York",
      "abbreviation": "NY"
    },
    {
      "name": "North Carolina",
      "abbreviation": "NC"
    },
    {
      "name": "North Dakota",
      "abbreviation": "ND"
    },
    {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
    },
    {
      "name": "Ohio",
      "abbreviation": "OH"
    },
    {
      "name": "Oklahoma",
      "abbreviation": "OK"
    },
    {
      "name": "Oregon",
      "abbreviation": "OR"
    },
    {
      "name": "Palau",
      "abbreviation": "PW"
    },
    {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    },
    {
      "name": "Puerto Rico",
      "abbreviation": "PR"
    },
    {
      "name": "Rhode Island",
      "abbreviation": "RI"
    },
    {
      "name": "South Carolina",
      "abbreviation": "SC"
    },
    {
      "name": "South Dakota",
      "abbreviation": "SD"
    },
    {
      "name": "Tennessee",
      "abbreviation": "TN"
    },
    {
      "name": "Texas",
      "abbreviation": "TX"
    },
    {
      "name": "Utah",
      "abbreviation": "UT"
    },
    {
      "name": "Vermont",
      "abbreviation": "VT"
    },
    {
      "name": "Virgin Islands",
      "abbreviation": "VI"
    },
    {
      "name": "Virginia",
      "abbreviation": "VA"
    },
    {
      "name": "Washington",
      "abbreviation": "WA"
    },
    {
      "name": "West Virginia",
      "abbreviation": "WV"
    },
    {
      "name": "Wisconsin",
      "abbreviation": "WI"
    },
    {
      "name": "Wyoming",
      "abbreviation": "WY"
    }
  ];

  // onSubmit(data) {
  //   // this.submitted = true;
  //   console.log(this.data);
  //   this.data = JSON.stringify(data, null, 2);
  //   console.log(this.data);
  // }



  logForm(value: any) {
    // console.log(value);
    // console.log(value.lname);
    // console.log(value.userdate.formatted)
      console.log(this.userId);
    this.record=   {

      "id": this.userId,
      "firstname":value.fname,
      "lastname":value.lname,
      "username":value.uname,
      "password" :value.password,
      "address" :value.address,
      "city":value.city,
      "state":this.stateValue,
      "zipcode":this.zipcode,
      "userdate":value.userdate.formatted


    }

    this.pharmaService
      .updateUser(this.userId, this.record)
      .subscribe(
        result =>this.successMessage="Shortage successfully updated!!",
        error => this.errorMessage = <any>error
      );
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
