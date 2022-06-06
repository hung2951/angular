import { TestBed } from '@angular/core/testing';

import { PrivateAdminGuard } from './private-admin.guard';

describe('PrivateAdminGuard', () => {
  let guard: PrivateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
