import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

import{OwnerDetailsComponent} from '../owner/owner-details/owner-details.component'
import { BankdetailsComponent } from '../bankdetails/bankdetails.component';
 
const routes: Routes = [
  { path: 'home', component: BankdetailsComponent},
  { path: 'company/:id', component:OwnerDetailsComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }