import { TestBed } from '@angular/core/testing';

import { MygitService } from './mygit.service';

describe('MygitService', () => {
  let service: MygitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
