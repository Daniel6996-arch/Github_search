import { TestBed } from '@angular/core/testing';

import { MyGitService } from './mygit.service';

describe('MygitService', () => {
  let service: MyGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
