import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle'
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
msg:string;
  vehicles:any=[];

  constructor(public vehicleService:VehicleService) { }

  ngOnInit(): void {
  this.vehicleService.getVehicles().subscribe(
    data=>{this.vehicles=data;console.log(data);
    }
  );
    
  }
  deleteVehicle(vid:number) {
    this.vehicleService.deleteVehicle(vid).subscribe(
      data=>{this.msg="Vehicle deleted succsesfully";
      this.vehicleService.getVehicles().subscribe(
        data=>{this.vehicles=data;console.log(data);
        }
      );
    }
    );
  } 
}
