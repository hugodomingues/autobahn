import { TestBed } from '@angular/core/testing';

import { RoadsService } from './roads.service';

describe('RoadsService', () => {
  let service: RoadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
