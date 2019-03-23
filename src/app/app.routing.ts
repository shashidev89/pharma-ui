// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from  '@angular/router';
// import { PharmaLoginComponent } from './pharma-login/pharma-login.component';
// import { PharmaHeaderComponent } from './pharma-header/pharma-header.component';
// import { PharmaAdminComponent } from './pharma-admin/pharma-admin.component';
// // import { PharmaSalesComponent } from './pharma-sales/pharma-sales.component';
// import { PharmaCapitalComponent } from './pharma-capital/pharma-capital.component';
// import { PharmaShortageComponent } from './pharma-shortage/pharma-shortage.component';
// import { PharmaOtherComponent } from './pharma-other/pharma-other.component';
// import {PharmaDeleteComponent} from "./pharma-delete/pharma-delete.component";
// import {PharmaUpdateComponent} from "./pharma-update/pharma-update.component";
// import {PharmaSignupComponent} from "./pharma-signup/pharma-signup.component";
//
//
// const routes: Routes = [
//   {
//     path: 'sales',
//     loadChildren: 'app/pharma-sales/pharma-sales.module#PharmaSalesModule',
//     data: { preload: true }
//   },
//   { path: 'capital', component: PharmaCapitalComponent },
//   { path: 'shortage', component:PharmaShortageComponent },
//   { path: 'finance', component:PharmaOtherComponent },
//   { path: 'admin', component:PharmaAdminComponent,
//     children:[
//       { path: '', pathMatch: 'full', redirectTo: 'delete'},
//       { path: 'delete', component: PharmaDeleteComponent },
//       { path: 'update/:id', component: PharmaUpdateComponent },
//       { path: 'signup', component:PharmaSignupComponent }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/sales',
//     pathMatch: 'full'
//   }
//   // {
//   //   path: '**',
//   //   component: PageNotFoundComponent
//   // }
// ];
//
//
//
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { }
//
// export const routingComponents = [
//   PharmaAdminComponent,PharmaShortageComponent,PharmaCapitalComponent,PharmaOtherComponent
//  ,PharmaLoginComponent,PharmaHeaderComponent,PharmaDeleteComponent,PharmaUpdateComponent,PharmaSignupComponent,
//
//
// ];
