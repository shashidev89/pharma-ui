import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmaSalesComponent }  from './pharma-sales.component';
import { PharmaUpdateSalesComponent } from './pharma-update-sales/pharma-update-sales.component';
import { PharmaMainsalesComponent } from './pharma-mainsales/pharma-mainsales.component';
import { PharmaDashboardComponent } from './pharma-dashboard/pharma-dashboard.component';

const salesRoutes: Routes = [
  {
    path: 'sales', component: PharmaSalesComponent,

    children: [
      { path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component:PharmaDashboardComponent,
      },
      {
        path: 'saleslog',
        component:PharmaMainsalesComponent,
      },
      {
        path: 'salesupdate',
        component:PharmaUpdateSalesComponent,
      }
        ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(salesRoutes) ],
  exports: [ RouterModule ]
})
export class PharmaSalesRoutingModule{ }
