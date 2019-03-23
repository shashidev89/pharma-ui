import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PharmaSignupComponent } from './pharma-signup.component';
import { DatePickerModule } from 'ng2-datepicker';


@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    PharmaSignupComponent,
    DatePickerModule

  ],
  providers: [],
  exports: [PharmaSignupComponent]
})
export class PharmaSignupModule {}
