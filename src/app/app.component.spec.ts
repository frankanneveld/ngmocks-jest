import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { MockProvider } from "ng-mocks";
import { of } from "rxjs";
import { AppComponent } from "./app.component";
import { HttpService, Book } from "./services/http/http.service";

describe('AppComponent', () => {
  let component: AppComponent;
  let service: HttpService;
  let fixture: ComponentFixture<AppComponent>;
  const testBook: Book[] = [{
    book: 'test'
  } as unknown as Book];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        MockProvider(HttpService, {
          getBooks: () => of(testBook)
        })
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get books on ngOnInit',  fakeAsync( ()=> {
    jest.spyOn(service, 'getBooks');
    component.ngOnInit();

    expect(service.getBooks).toHaveBeenCalled();
    component.books?.subscribe( (books: Book[]) => {
        expect(books).toBe(testBook);
    })
    tick();
  }));
});