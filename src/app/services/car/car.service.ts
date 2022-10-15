import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiURL = "https://localhost:44303/api/Cars/";
  constructor(private http: HttpClient) { }

  getAllCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiURL + "getallcardetails";
    return this.http.get<ListResponseModel<Car>>(`${newPath}`);
  }
  getAllCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiURL + "getalldetailsbybrandid?id=" + brandId;
    return this.http.get<ListResponseModel<Car>>(`${newPath}`);
  }
  getAllCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiURL + "getalldetailsbycolorid?id=" + colorId;
    return this.http.get<ListResponseModel<Car>>(`${newPath}`);
  }
  getCarDetailsById(carId: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiURL + "getcardetailsbyid?id=" + carId;
    return this.http.get<SingleResponseModel<Car>>(`${newPath}`);
  }
}
