import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { AppRoutingModule, routingComponents } from './app.routing';

import { PharmaSalesModule }  from './pharma-sales/pharma-sales-module';
import { PharmaLoginComponent } from './pharma-login/pharma-login.component';
import { PharmaService } from './shared/pharma.service';
import { PharmaHeaderComponent } from './pharma-header/pharma-header.component';
import { PharmaAdminComponent } from './pharma-admin/pharma-admin.component';
 import { PharmaSalesComponent } from './pharma-sales/pharma-sales.component';
import { PharmaCapitalComponent } from './pharma-capital/pharma-capital.component';
import { PharmaShortageComponent } from './pharma-shortage/pharma-shortage.component';
import { PharmaOtherComponent } from './pharma-other/pharma-other.component';
import { PharmaSignupComponent } from './pharma-signup/pharma-signup.component';
import { PharmaUpdateComponent } from './pharma-update/pharma-update.component';
import { PharmaDeleteComponent } from './pharma-delete/pharma-delete.component';
 import {PharmaSignupModule} from "./pharma-signup/pharma-signup.module";
import { Routes, RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { PharmaShortagelistComponent } from './pharma-shortagelist/pharma-shortagelist.component';
import { PharmaShortageHeaderComponent } from './pharma-shortage-header/pharma-shortage-header.component';
import { PharmaNotfoundpageComponent } from './pharma-notfoundpage/pharma-notfoundpage.component';
import { PharmaShortageUpdateComponent } from './pharma-shortage-update/pharma-shortage-update.component';


const routes: Routes = [
  // {
  //   path: 'sales',
  //   loadChildren: 'app/pharma-sales/pharma-sales.module#PharmaSalesModule',
  //   data: { preload: true }
  // },
  { path: 'capital', component: PharmaCapitalComponent },
  { path: 'shortage', component:PharmaShortageHeaderComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'shortagelist'},
      { path: 'shortagelist', component: PharmaShortagelistComponent},
      { path: 'shortageentry', component: PharmaShortageComponent},
      { path: 'update/:id', component: PharmaShortageUpdateComponent}
    ]
  },
  { path: 'finance', component:PharmaOtherComponent },
  { path: 'admin', component:PharmaAdminComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'delete'},
      { path: 'delete', component: PharmaDeleteComponent },
      { path: 'update/:id', component: PharmaUpdateComponent },
      { path: 'signup', component:PharmaSignupComponent }
    ]
  },
  {
    path: '',
     redirectTo: '/sales/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PharmaNotfoundpageComponent
  }
];
const routerModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    PharmaLoginComponent,
    PharmaHeaderComponent,
    PharmaAdminComponent,
    PharmaCapitalComponent,
    PharmaShortageComponent,
    PharmaOtherComponent,
    PharmaSignupComponent,
    PharmaUpdateComponent,
    PharmaDeleteComponent,
    PharmaShortagelistComponent,
    PharmaShortageHeaderComponent,
    PharmaNotfoundpageComponent,
    PharmaShortageUpdateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    routerModule,
    PharmaSalesModule
    // PharmaSignupModule
  ],
  providers: [PharmaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
