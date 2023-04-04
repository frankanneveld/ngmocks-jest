import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { delay, from, map, of, tap } from 'rxjs';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  // let httpController: HttpTestingController;
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
    // httpController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books', () => {
    jest.spyOn(httpClient, 'get').mockReturnValue(of(books));
    service.getBooks().subscribe();
    expect(httpClient.get).toHaveBeenCalled();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it('should do something', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const obs$ = from(arr).pipe(map((r) => r + 1));
    const expected = 55;

    let count = 0;
    obs$.subscribe((res) => (count += res));

    expect(count).toEqual(expected);
    expect(count).toBe(expected);
    expect(count).not.toBeNull();
  });

  it('should do something with array subscribtion', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const obs$ = from(arr);

    obs$.subscribe((res) => {
      console.log(res, res === 1);
      expect(res).not.toBe(56)
    });

  });
});
