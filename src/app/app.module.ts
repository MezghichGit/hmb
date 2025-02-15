import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpperCaseFirstLetterPipe } from './pipes/upper-case-first-letter.pipe';
import { AddIngPipe } from './pipes/add-ing.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ListPostsComponent } from './list-posts/list-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UpperCaseFirstLetterPipe,
    AddIngPipe,
    CurrencyFormatPipe,
    ListEmployerComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
