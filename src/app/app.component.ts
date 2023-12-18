import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, HttpService } from './services/http/http.service';
import { LabelComponent } from './directives/component/basic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public httpService = inject(HttpService);

  public books!: Observable<Book[]>;

  ngOnInit(): void {
    this.books = this.httpService.getBooks();
  }
}
