import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationListComponent } from './information-list.component';

describe('SeeMoreDataTableComponent', () => {
  let component: InformationListComponent;
  let fixture: ComponentFixture<InformationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
