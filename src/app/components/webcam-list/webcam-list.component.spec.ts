import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamListComponent } from './webcam-list.component';

describe('WebcamListComponent', () => {
  let component: WebcamListComponent;
  let fixture: ComponentFixture<WebcamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebcamListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebcamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
