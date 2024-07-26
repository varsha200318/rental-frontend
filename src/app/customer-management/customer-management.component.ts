import { Component, OnInit } from '@angular/core';
import { Customer } from '@angular/common/http';
import { CustomerService} from 'rxjs';
import {Router } from '../Customer';


@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent implements OnInit {

 customer: Customer[];

  constructor(private CustomerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getcustomer();
  }

  private getCustomers(){
    this.CustomerService.getEmployeesList().subscribe(data => {
      this.customer = data;
    });
  }

 customerDetails(id: number){
    this.router.navigate(['customer-details', id]);
  }

  updateCustomer(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.CustomerService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getCustomers();
    })
  }
}

