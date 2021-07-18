import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { VehicleDto } from '../vehicle-dto';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
vehicleDto:VehicleDto=new VehicleDto();
vehicle_id:any;
msg:string;
errormsg:string;
@ViewChild("vehiclefrm")
frm:NgForm;
  constructor(public vehicleService:VehicleService) {
    
   }

  ngOnInit(): void {
  }
addVehicle(){
  this.vehicleService.addVehicle(this.vehicleDto).subscribe(
    data=>{this.msg="vehicle added successfully";
          this.errormsg=undefined;
          this.vehicleDto=new VehicleDto();
          this.frm.reset();
        },
        (err:any)=>{this.errormsg=err.error.message;
                this.msg=undefined;
      }

  );
  
}
}
