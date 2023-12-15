import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpBookInterceptorProvider } from './interceptors/http-book.interceptor';
import { LabelComponent } from './directives/label/label.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LabelComponent
  ],
  providers: [HttpBookInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
