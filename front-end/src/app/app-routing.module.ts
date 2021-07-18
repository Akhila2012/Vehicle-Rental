import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'customer', component:CustomerComponent},
  {path:'customer/:id/edit', component:CustomerEditComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: '', redirectTo: 'vehicles', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'add-vehicle', component: AddVehicleComponent},
  {path: 'book-vehicle', component: BookingListComponent},
  {path: 'view-bookings', component: ViewBookingsComponent},
  {path: 'addBooking/:vid',component:AddBookingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
