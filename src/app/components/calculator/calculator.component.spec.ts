import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should append numbers to display', () => {
      component.appendToDisplay('1');
      expect(component.display).toBe('1');
    });

    it('should append operator to display', () => {
      component.appendToDisplay('+');
      expect(component.display).toBe('+');
    });

    it('should clear display', () => {
      component.display = '123';
      component.clear();
      expect(component.display).toBe('');
    });

    it('should calculate the expression', () => {
      component.appendToDisplay('1+2');
      component.calculate();
      expect(component.display).toBe(3);
    });

    it('should handle invalid expressions', () => {
      component.appendToDisplay('1++');
      component.calculate();
      expect(component.display).toBe('Error');
    });

    it('should handle division by zero', () => {
      component.appendToDisplay('10/0');
      component.calculate();
      expect(component.display).toBe(Infinity);
    });

    it('should handle complex expressions', () => {
      component.appendToDisplay('10*2+5/3-(8+2)');
      component.calculate();
      expect(component.display).toBe(11.666666666666668);
    });

    it('should handle modulo operation', () => {
      component.appendToDisplay('15%4');
      component.calculate();
      expect(component.display).toBe(3);
    });

    it('should handle decimal point', () => {
      component.appendToDisplay('1.5*2');
      component.calculate();
      expect(component.display).toBe(3);
    });

    it('should handle power operation', () => {
      component.appendToDisplay('2**3');
      component.calculate();
      expect(component.display).toBe(8);
    });

    it('should handle multiple calculations', () => {
      component.appendToDisplay('5+5');
      component.calculate();
      expect(component.display).toBe(10);
      component.appendToDisplay('*2');
      component.calculate();
      expect(component.display).toBe(20);
      component.appendToDisplay('/4');
      component.calculate();
      expect(component.display).toBe(5);
    });
  });
});
