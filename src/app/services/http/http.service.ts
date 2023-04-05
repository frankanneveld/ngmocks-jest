import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, throwError } from 'rxjs';

export type Book = {
  book_id: number;
  book_title: string;
  author_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient);
  private booksUrl: string = './assets/books.json';

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      delay(1000),
      map((resp: any) => resp?.books)
    );
  }

  public getBooksWithHttpError(): Observable<Book[]> {
    return this.http.get<Book[]>('/not-found').pipe(
      catchError((error) => {
        return throwError(() => new Error('Oops something happened, ', error));
      })
    );
  }

}
