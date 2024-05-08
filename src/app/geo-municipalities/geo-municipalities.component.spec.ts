import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoMunicipalitiesComponent } from './geo-municipalities.component';

describe('GeoMunicipalitiesComponent', () => {
  let component: GeoMunicipalitiesComponent;
  let fixture: ComponentFixture<GeoMunicipalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoMunicipalitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoMunicipalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
