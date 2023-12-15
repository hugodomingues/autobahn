import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadDetailsPageComponent } from './road-details-page.component';

describe('RoadDetailsPageComponent', () => {
  let component: RoadDetailsPageComponent;
  let fixture: ComponentFixture<RoadDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
