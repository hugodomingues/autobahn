import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadDetailsComponent } from './road-details.component';

describe('RoadDetailsComponent', () => {
  let component: RoadDetailsComponent;
  let fixture: ComponentFixture<RoadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
