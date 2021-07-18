import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    
    ViewBookingsComponent,
    BookingListComponent,
    VehicleListComponent,
    AddVehicleComponent,
    
    AddBookingComponent,
    CustomerComponent,
    CustomerEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
