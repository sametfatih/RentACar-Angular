import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiURL="https://localhost:44303/api/Rentals/getdetails"

  constructor(private http:HttpClient) { }

  getAllRentals():Observable<ListResponseModel<Rental>>{
    return this.http.get<ListResponseModel<Rental>>(`${this.apiURL}`);
  }
}
