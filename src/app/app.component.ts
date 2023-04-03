import { Component, OnInit, inject } from '@angular/core';
import { Book, HttpService } from './services/http/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public httpService = inject(HttpService);

  public books: Observable<Book[]> | null = new Observable<Book[]>();

  ngOnInit(): void {
    this.books = this.httpService.getBooks();
  }
}
