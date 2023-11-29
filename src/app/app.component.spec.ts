import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                CalculatorComponent
            ],
        }).compileComponents();
    });

    describe('boundary', () => {
        it('should create the app', () => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.componentInstance;
            expect(app).toBeTruthy();
        });

        it('should render "My Calculator App" heading', () => {
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const compiled = fixture.nativeElement;
            expect(compiled.querySelector('h2').textContent).toContain('My Calculator App');
        });

        it('should render app-calculator component', () => {
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const compiled = fixture.nativeElement;
            expect(compiled.querySelector('app-calculator')).toBeTruthy();
        });
    });
});
