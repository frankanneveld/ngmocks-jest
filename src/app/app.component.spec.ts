import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HttpService } from './services/http/http.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let service: HttpService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [MockProvider(HttpService)],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get books on ngOnInit', () => {
    const books = [
      {
        book_id: 1,
        book_title: 'The Unknown Jhon',
        author_name: 'Jhon Doe',
      },
      {
        book_id: 2,
        book_title: 'The Unknown Jane',
        author_name: 'Jane Doe',
      },
    ];

    jest.spyOn(service, 'getBooks').mockReturnValue(of(books));
    fixture.detectChanges();
    expect(component.books).not.toBeUndefined();
  });

  it('should NOT get books on ngOnInit', () => {
    jest.spyOn(service, 'getBooks');
    fixture.detectChanges();
    expect(component.books).toBeUndefined();
  });
});
