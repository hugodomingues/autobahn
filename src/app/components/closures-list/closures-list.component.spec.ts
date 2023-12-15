import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosuresListComponent } from './closures-list.component';

describe('ClosuresListComponent', () => {
  let component: ClosuresListComponent;
  let fixture: ComponentFixture<ClosuresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosuresListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClosuresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
