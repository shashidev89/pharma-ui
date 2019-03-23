
import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { PharmaSalesComponent }  from './pharma-sales.component';
import { PharmaUpdateSalesComponent } from './pharma-update-sales/pharma-update-sales.component';
import { PharmaSalesHeaderComponent } from './pharma-sales-header/pharma-sales-header.component';
import { PharmaMainsalesComponent } from './pharma-mainsales/pharma-mainsales.component';
import { PharmaSalesRoutingModule }  from './pharma-sales-routing.module';
import { PharmaDashboardComponent } from './pharma-dashboard/pharma-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PharmaSalesRoutingModule
  ],
  declarations: [
    PharmaSalesComponent,
    PharmaUpdateSalesComponent,
    PharmaSalesHeaderComponent ,
    PharmaMainsalesComponent,
    PharmaDashboardComponent
  ],
  providers: [  ]
})
export class PharmaSalesModule { }
