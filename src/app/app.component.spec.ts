import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockInstance, MockProvider, ngMocks } from 'ng-mocks';
import { HttpService } from './services/http/http.service';
import { of, tap } from 'rxjs';

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

  it('should get books on ngOnInit', fakeAsync(() => {
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

    jest.spyOn(service, 'getBooks').mockReturnValue(null);
    fixture.detectChanges();
    expect(component.books).toBeNull();
  }));
});
