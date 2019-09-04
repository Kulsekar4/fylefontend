import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component'; 
import {FlexLayoutModule} from '@angular/flex-layout'; 
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OwnerDetailsComponent} from './owner/owner-details/owner-details.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    OwnerDetailsComponent,
    BankdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}