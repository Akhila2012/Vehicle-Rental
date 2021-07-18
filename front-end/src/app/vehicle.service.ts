import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { VehicleDto } from './vehicle-dto';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  

  constructor(private httpClient: HttpClient) { }
  
  
  
  

  
addVehicle(vehicle:VehicleDto):Observable<any>{
  return this.httpClient.post("http://localhost:7071/vehicle/add",vehicle);
}
  deleteVehicle(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:7071/vehicle/cancel/"+id);
  }
  getVehicles():Observable<any>{
    return this.httpClient.get("http://localhost:7071/vehicle/viewall")
  }
}
