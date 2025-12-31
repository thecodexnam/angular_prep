import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { timeout } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // string, number, boolean, data

  courseName: string = 'Angular 20';
  isActive: boolean = true;
  currentDate: Date = new Date();
  rollNo: number = 2350958113;
  spanClassNAme = 'secondary'

  maxTestLength = 12;  

  constructor() {
    console.log(this.courseName);

    this.courseName = 'Angular Tutorial';
    console.log(this.courseName);

    setTimeout(()=>{
      this.rollNo = 123456789;
    },10000) 
  }

  showAlert(){
    alert("Show Alert Button Called")
  }

  onCityChanged(){
    alert('City Changed')
  }

  onWindowChanged(){
    console.log("Window Size Changed ")
  }

  addTwoNum(num1 : number, num2: number){
    return num1+num2;
  }
}
