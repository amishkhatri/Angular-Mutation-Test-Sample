import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

    firstNumber! : number;
    secondNumber!: number;
  
    add(): number {
      return this.firstNumber + this.secondNumber;
    }
  
    subtract(): number {
      return this.firstNumber - this.secondNumber;
    }
  
    multiply(): number {
      return this.firstNumber * this.secondNumber;
    }
  
    divide(): number {
      return this.firstNumber / this.secondNumber;
    }
}
