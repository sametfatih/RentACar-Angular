import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  colors!:Color[];
  currentColor:Color={id:0,colorName:""}

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
  this.getColors()
  }

  getColors() {
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
    })
  }

  setCurrentAllColors() {
    this.currentColor={ id: 0, colorName: "" }
  }
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }
  getAllColorClass() {
    if (this.currentColor.id == 0) {
      return "list-group-item active"
    }
    else { return "list-group-item" }
  }
  getCurrentColorClass(color:Color){
    if (this.currentColor == color) {
      return "list-group-item active"
    }
    else { return "list-group-item" }
  }
}
