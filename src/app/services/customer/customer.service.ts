import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL="https://localhost:44303/api/Customers/getallcustomerdetails"

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<CustomerResponseModel>{
    return this.http.get<CustomerResponseModel>(`${this.apiURL}`);
  }
}
