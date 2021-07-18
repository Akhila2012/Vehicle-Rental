import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  msg:String='';
  errormsg:String='';
  customer: Customer = new Customer;
  customer_id: any;
  @ViewChild("form") form!: NgForm;
  constructor(private route:ActivatedRoute,private customer_service:CustomerService) {
    this.customer_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.customer_service.get(this.customer_id).subscribe((res:Customer) => this.customer=res);
    console.info(this.customer);
  }

  onSubmit(data:any){
    this.customer_service.update(this.customer_id, data.value).subscribe((res:any)=>{
        this.msg = "Customer update successfully";
        this.errormsg = '';
    }, (err:any)=>{
        this.errormsg = err.error.message;
        this.msg = '';
    });
  }

}
