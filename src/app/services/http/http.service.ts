import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  public getBooks(): Observable<Book[]> | null {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      map((resp: any) => resp?.books)
    );
  }

  public setNewData(data: any): void {
    //
  }
}
