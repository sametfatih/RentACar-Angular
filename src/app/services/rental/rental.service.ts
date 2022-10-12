import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RentalResponseModel} from "src/app/models/rentalResponseModel"

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiURL="https://localhost:44303/api/Rentals/getdetails"

  constructor(private http:HttpClient) { }

  getAllRentals():Observable<RentalResponseModel>{
    return this.http.get<RentalResponseModel>(`${this.apiURL}`);
  }
}
