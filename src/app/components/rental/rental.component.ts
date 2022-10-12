import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  dataLoaded:boolean=false;

  constructor(private service:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.service.getAllRentals().subscribe((result)=>{
      this.rentals=result.data;
      this.dataLoaded=true;
    })
  }
}
