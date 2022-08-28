import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddBookComponent } from './Book/add-book/add-book.component';
import { UpdateBookComponent } from './Book/update-book/update-book.component';
import { DeleteBookComponent } from './Book/delete-book/delete-book.component';
import { ListBooksComponent } from './Book/list-books/list-books.component';
import { ListBookshopsComponent } from './BookShop/list-bookshops/list-bookshops.component';
import { AddBookshopComponent } from './BookShop/add-bookshop/add-bookshop.component';
import { UpdateBookshopComponent } from './BookShop/update-bookshop/update-bookshop.component';
import { DeleteBookshopComponent } from './BookShop/delete-bookshop/delete-bookshop.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ListBooksComponent,
    ListBookshopsComponent,
    AddBookshopComponent,
    UpdateBookshopComponent,
    DeleteBookshopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
