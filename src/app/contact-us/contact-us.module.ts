import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
      CoreModule
  ], declarations: [ContactUsComponent],
  exports: [
      ContactUsComponent
  ]
})
export class ContactUsModule { }
