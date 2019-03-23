import { Component, OnInit } from '@angular/core';
import { PharmaSalesHeaderComponent } from '../pharma-sales-header/pharma-sales-header.component';

import { PharmaUpdateSalesComponent } from '../pharma-update-sales/pharma-update-sales.component';


@Component({
  selector: 'app-pharma-dashboard',
  templateUrl: './pharma-dashboard.component.html',
  styleUrls: ['./pharma-dashboard.component.css']
})
export class PharmaDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
