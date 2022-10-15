import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  private apiURL = "https://localhost:44303/api/CarImages/";
  constructor(private http: HttpClient) { }

  getAllCarImagesByCarId(carId:number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiURL + "getallbycarid?carId="+carId;
    return this.http.get<ListResponseModel<CarImage>>(`${newPath}`);
  }
}
