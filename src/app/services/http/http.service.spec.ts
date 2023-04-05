import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
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
      providers: [HttpService],
    });

    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books', () => {
    jest.spyOn(httpClient, 'get').mockReturnValue(of(books));
    service.getBooks();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it('should handle http error', () => {

  });


});
