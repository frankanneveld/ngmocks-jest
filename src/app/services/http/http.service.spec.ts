import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { Book, HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpController: HttpTestingController;
  let httpClient: HttpClient;

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
    });

    service = TestBed.inject(HttpService);
    httpController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpController.verify();
    console.log('afterEach');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books', () => {



    httpClient.get<Book[]>('./assets/books.json')
    .subscribe(data =>
        expect(data).toBe(books)
    );

    




    const req = httpController.expectOne('./assets/books.json');
    expect(req.request.method).toBe('GET');
    req.flush(books);
  });

});
