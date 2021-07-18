import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDto } from './booking-dto';
import { VehicleDto } from './vehicle-dto';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpClient: HttpClient) { }

    
cancelBooking(id: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:7071/booking/cancel/"+id);
  }
selectBooking():Observable<any>{
    return this.httpClient.get("http://localhost:7071/vehicle/viewall")
  }
getBookings(): Observable<any>{
  return this.httpClient.get("http://localhost:7071/booking/viewAll");
}
viewBookings(): Observable<any>{
  return this.httpClient.get("http://localhost:7071/booking/viewAll");
}
addBooking(booking:BookingDto):Observable<any>{
  return this.httpClient.post("http://localhost:7071/booking/add",booking);
}
}