import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HttpBookInterceptor } from './http-book.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('HttpBookInterceptor', () => {
  let httpClient: HttpClient;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpBookInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should intercept all http errors and throw custom message', fakeAsync(() => {
    httpClient.get('./assets/books.json').subscribe({
      error: (error) => {
        expect(error).toBe('Oops we have an HTTP error!')
      }
    });
    const req = controller.expectOne('./assets/books.json');
    req.flush(null, { status: 500, statusText: 'Error' });
    tick();
  }));
});
