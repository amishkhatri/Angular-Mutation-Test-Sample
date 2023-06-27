import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent]
    });
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add two numbers', () => {
    component.firstNumber = 50;
    component.secondNumber = 70;
    expect(component.add()).toEqual(120);
  });

  it('should subtract two numbers', () => {
    component.firstNumber = 50;
    component.secondNumber = 70;
    expect(component.subtract()).toEqual(-20);
  });

  it('should multiply two numbers', () => {
    component.firstNumber = 50;
    component.secondNumber = 70;
    expect(component.multiply()).toEqual(3500);
  });

  it('should divide two numbers', () => {
    component.firstNumber = 50;
    component.secondNumber = 70;
    expect(component.divide()).toEqual(0.7142857142857143);
    
  });
});
