import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataComponentComponent } from './no-data-component.component';

describe('NoDataComponentComponent', () => {
  let component: NoDataComponentComponent;
  let fixture: ComponentFixture<NoDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoDataComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
