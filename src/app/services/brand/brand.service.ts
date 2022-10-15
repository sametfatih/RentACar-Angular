import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiURL ="https://localhost:44303/api/brands/getall"

  constructor(private http:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.http.get<ListResponseModel<Brand>>(`${this.apiURL}`);
  }

}
