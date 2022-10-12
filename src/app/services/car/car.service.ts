import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiURL = "https://localhost:44303/api/Cars/getallcardetails";
  constructor(private http:HttpClient) { }

  getAllCars():Observable<CarResponseModel>{
      return this.http.get<CarResponseModel>(`${this.apiURL}`);
  }
}
