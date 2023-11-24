import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, CalculatorComponent],
        });
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(app).toBeTruthy();
        });

        it('should display the title', () => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Welcome to My Calculator App');
        });
    });
});
