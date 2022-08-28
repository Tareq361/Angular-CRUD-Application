import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddBookComponent } from './Book/add-book/add-book.component';
import { UpdateBookComponent } from './Book/update-book/update-book.component';
import { DeleteBookComponent } from './Book/delete-book/delete-book.component';
import { ListBooksComponent } from './Book/list-books/list-books.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
