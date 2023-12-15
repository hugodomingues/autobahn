import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingStationsListComponent } from './charging-stations-list.component';

describe('ChargingStationsListComponent', () => {
  let component: ChargingStationsListComponent;
  let fixture: ComponentFixture<ChargingStationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingStationsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChargingStationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
