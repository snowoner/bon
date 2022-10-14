import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhereComponent } from './where.component';
import { WhereRoutingModule } from './where-routing.module';



@NgModule({
  declarations: [
    WhereComponent
  ],
  imports: [
    CommonModule,
    WhereRoutingModule
  ]
})
export class WhereModule { }
