import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLorriesListComponent } from './parking-lorries-list.component';

describe('ParkingLorriesListComponent', () => {
  let component: ParkingLorriesListComponent;
  let fixture: ComponentFixture<ParkingLorriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingLorriesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingLorriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
