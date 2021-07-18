import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingDto } from '../booking-dto';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

bookingDto:BookingDto=new BookingDto();
msg:string;
errormsg:string;
@ViewChild("bookfrm")
frm:NgForm;

  constructor(public bookingService: BookingServiceService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{this.bookingDto.vehicleId=parseInt(params.get("vid"))}
    );
  }

  addBooking(){

    this.bookingService.addBooking(this.bookingDto).subscribe(
      data=>{this.msg="Booking Successful";
            this.errormsg=undefined;
            this.bookingDto=new BookingDto();
            this.frm.reset();
          },
          (err:any)=>{this.errormsg=err.error.message;
                  this.msg=undefined;
        }
  
    );

}
}