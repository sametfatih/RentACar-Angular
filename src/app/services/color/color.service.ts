import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiURL ="https://localhost:44303/api/colors/getall"

  constructor(private http:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.http.get<ListResponseModel<Color>>(`${this.apiURL}`);
  }
}
