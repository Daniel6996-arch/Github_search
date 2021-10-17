import { TestBed } from '@angular/core/testing';

import { MyReposService } from './myrepos.service';

describe('MyreposService', () => {
  let service: MyReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
