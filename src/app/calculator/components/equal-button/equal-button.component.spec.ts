import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualButtonComponent } from './equal-button.component';

describe('EqualButtonComponent', () => {
  let component: EqualButtonComponent;
  let fixture: ComponentFixture<EqualButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
