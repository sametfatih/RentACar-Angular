import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL="https://localhost:44303/api/Customers/getallcustomerdetails"

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<ListResponseModel<Customer>>{
    return this.http.get<ListResponseModel<Customer>>(`${this.apiURL}`);
  }
}
