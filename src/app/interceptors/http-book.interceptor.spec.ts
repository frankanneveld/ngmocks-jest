import { TestBed } from '@angular/core/testing';

import { HttpBookInterceptor } from './http-book.interceptor';

describe('HttpBookInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpBookInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpBookInterceptor = TestBed.inject(HttpBookInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
