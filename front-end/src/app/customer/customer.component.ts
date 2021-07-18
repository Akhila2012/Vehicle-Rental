import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  msg:String='';
  customers: Customer[] = [];
  constructor(private customer_service:CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }
  getAllCustomers(){
    this.customer_service.getAll().subscribe((res:any)=>{
      this.customers = res;
    });
  }
  deleteCustomer(id:number){
    this.customer_service.delete(id).subscribe((res:any)=>{
      this.msg = "Customer deleted successfully.";
      this.getAllCustomers();
    });
  }

}
