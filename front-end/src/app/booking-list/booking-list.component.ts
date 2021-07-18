import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  msg:string;
  vehicles:any=[];
  bookings:any=[];
  constructor(public bookingService:BookingServiceService) { }

  ngOnInit(): void {
    this.bookingService.selectBooking().subscribe(
      data=>{this.vehicles=data;console.log(data);
      }
    );
  }
  selectBooking() {
    this.bookingService.selectBooking().subscribe(
      data=>{this.msg="Vehicle selected for booking succsesfully";
      this.bookingService.selectBooking().subscribe(
        data=>{this.bookings=data;console.log(data);
        }
      );
    }
    );
  } 
  viewBookings(){
    this.bookingService.getBookings().subscribe(
      data=>{this.vehicles=data;console.log(data);
        this.bookings=data;console.log(data);
      }
    );

  }

}
