import { TestBed } from '@angular/core/testing';

import { DoctorEntityService } from './doctor.entity.service';

describe('DoctorEntityService', () => {
  let service: DoctorEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
