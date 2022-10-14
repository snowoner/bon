import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhereComponent } from './where.component';

const routes: Routes = [
    { path: '', component: WhereComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhereRoutingModule { }
