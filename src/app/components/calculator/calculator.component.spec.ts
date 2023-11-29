import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the calculator component', () => {
      expect(component).toBeTruthy();
    });

    it('should add a number to the expression', () => {
      component.appendToExpression('5');
      expect(component.expression).toBe('5');
    });

    it('should add operators to the expression', () => {
      component.appendToExpression('5');
      component.appendToExpression('+');
      component.appendToExpression('2');
      expect(component.expression).toBe('5+2');
    });

    it('should calculate the result', () => {
      component.appendToExpression('5');
      component.appendToExpression('+');
      component.appendToExpression('2');
      component.calculateResult();
      expect(component.result).toBe(7);
    });

    it('should handle error in calculation', () => {
      component.appendToExpression('5+');
      component.calculateResult();
      expect(component.result).toBe('Error');
    });

    it('should clear the expression and result', () => {
      component.appendToExpression('5+2');
      component.clearExpression();
      expect(component.expression).toBe('');
      expect(component.result).toBe('');
    });

    it('should have a button with content "1"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '1') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "2"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '2') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "3"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '3') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "4"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '4') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "5"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '5') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "6"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '6') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "7"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '7') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "8"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '8') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "9"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '9') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });

    it('should have a button with content "0"', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button');
      let buttonWithOne = false;
      buttons.forEach((button: Element) => {
        if (button.textContent === '0') {
          buttonWithOne = true;
          expect(button.tagName.toLowerCase()).toBe('button');
        }
      });
      expect(buttonWithOne).toBe(true);
    });
  });
});
