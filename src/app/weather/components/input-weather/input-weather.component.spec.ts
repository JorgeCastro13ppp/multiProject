import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWeatherComponent } from './input-weather.component';

describe('InputWeatherComponent', () => {
  let component: InputWeatherComponent;
  let fixture: ComponentFixture<InputWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
