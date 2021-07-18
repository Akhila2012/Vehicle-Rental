import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:7071/";
  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @param customer customer data which wants to add
   * @returns httpClient observer which will subscribe in the components
   */
  add(customer: Customer): Observable<any> {
    return this.httpClient.post(`${this.baseURL}customer/add`, customer);
  }

  /**
   * 
   * @param id number unique id of the customer
   * @param customer customer data which want to update
   * @returns httpClient observer which will subscribe in the components
   */
  update(id: number, customer: Customer): Observable<any> {
    return this.httpClient.put(`${this.baseURL}customer/update/${id}`, customer);
  }

  /**
   * 
   * @param id number unique id of the customer
   * @returns httpClient observer which will subscribe in the components
   */
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}customer/remove/${id}`);
  }

  /**
   * 
   * @param id number unique id of the customer
   * @returns httpClient observer which will subscribe in the components
   */
  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}customer/view/${id}`)
  }

  /**
   * 
   * @returns httpClient observer which will subscribe in the components
   */
  getAll(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}customer/viewAll`)
  }
}
