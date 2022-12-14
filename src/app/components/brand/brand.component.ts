import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands!: Brand[];
  currentBrand: Brand = { id: 0, brandName: "" }

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    })
  }

  setCurrentAllBrands() {
    this.currentBrand = { id: 0, brandName: "" }
  }
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }
  getAllBrandClass() {
    if (this.currentBrand.id == 0) {
      return "list-group-item active"
    }
    else { return "list-group-item" }
  }
  getCurrentBrandClass(brand: Brand) {
    if (this.currentBrand == brand) {
      return "list-group-item active"
    }
    else { return "list-group-item" }
  }
}
