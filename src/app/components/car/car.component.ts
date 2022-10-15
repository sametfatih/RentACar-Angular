import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded: boolean = false;

  constructor(private carService: CarService,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["brandId"]) {
        this.getCarsByBrandId(param["brandId"]);
      }
      else if(param["colorId"]){
        this.getCarsByColorId(param["colorId"])
      }
      else {
        this.getAllCars()
      }
    })
   
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getAllCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByColorId(colorId:number){
    this.carService.getAllCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  carDetails(carId:number){ 
    this.router.navigate(['car',carId])
  }
}
