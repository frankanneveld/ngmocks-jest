import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { catchError, of, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { MockProvider } from 'ng-mocks';

describe('HttpService', () => {
  let service: HttpService;
  let httpClient: HttpClient;
  let controller: HttpTestingController;

  const books = {
    books: [
      {
        book_id: 1,
        book_title: 'Unshakeable: Your Financial Freedom Playbook',
        author_name: 'Tony Robbins',
      },
      {
        book_id: 2,
        book_title:
          'Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers',
        author_name: 'Timothy Ferriss',
      },
      {
        book_id: 3,
        book_title:
          'The 10X Rule: The Only Difference Between Success and Failure',
        author_name: 'Grant Cardone',
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });

    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books', fakeAsync(() => {
    service.getBooks().subscribe((value) => expect(value).toBe(books.books));

    const req = controller.expectOne('./assets/books.json');
    req.flush(books);
    tick(1000); // there is a delay(1000)
  }));

  it('should catch error 500 Error', fakeAsync(() => {
    service.getBooks().subscribe({
      next: (value) => {
        expect(value).toBe('error!!!');
      },
      error: (error) => expect(error).toEqual('This should never occur.'),
    });

    const req = controller.expectOne('./assets/books.json');
    req.flush(null, { status: 500, statusText: 'Error' });
    tick();
  }));
});
