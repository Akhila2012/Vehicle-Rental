import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  msg:string;
  bookings:any=[];

  constructor(public bookingService : BookingServiceService) { }

  ngOnInit(): void {
    this.bookingService.viewBookings().subscribe(
      data=>{this.bookings=data;console.log(data);
      }
    );
    }
}
