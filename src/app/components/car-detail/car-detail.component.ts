import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car/car.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car={carId:0,brandId:0,modelId:0,colorId:0,brand:"",model:"",color:"",dailyPrice:0,modelYear:2001,description:""};
  carImages!:CarImage[]
  imageURL="https://localhost:44303"

  constructor(private carService:CarService,private carImageService:CarImageService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      if(param["carId"]){
        this.getCarDetailsById(param["carId"]);
        this.getCarImageByCarId(param["carId"]);
      }
    })
  }

  getCarDetailsById(carId:number){
    this.carService.getCarDetailsById(carId).subscribe((response)=>{
      this.car=response.data;
    })
  }
  getCarImageByCarId(carId:number){
    this.carImageService.getAllCarImagesByCarId(carId).subscribe((response)=>{
      this.carImages=response.data;
    })
  }
  getCarImage(carImage:CarImage){
  
    if(carImage.id=0){
      let path = this.imageURL+"/images/default.jpg";
      return path;
    }
    else{
      let path = this.imageURL + carImage.imagePath;
      return path;
    }
  }
}
