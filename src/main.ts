import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpBookInterceptorProvider } from './app/interceptors/http-book.interceptor';

bootstrapApplication(AppComponent, {
  providers: [HttpBookInterceptorProvider],
}).catch((err) => console.error(err));
