import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddBookComponent } from './Book/add-book/add-book.component';
import { UpdateBookComponent } from './Book/update-book/update-book.component';
import { DeleteBookComponent } from './Book/delete-book/delete-book.component';
import { ListBooksComponent } from './Book/list-books/list-books.component';
import { ListBookshopsComponent } from './BookShop/list-bookshops/list-bookshops.component';
import { AddBookshopComponent } from './BookShop/add-bookshop/add-bookshop.component';
import { UpdateBookshopComponent } from './BookShop/update-bookshop/update-bookshop.component';
import { DeleteBookshopComponent } from './BookShop/delete-bookshop/delete-bookshop.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'Bookshops', pathMatch: 'full' },
  { path: 'Books', component: ListBooksComponent },
  { path: 'Bookshops', component: ListBookshopsComponent },
  { path: 'AddBookshops', component: AddBookshopComponent },
  { path: 'Bookshops/UpdateBookshops/:id', component: UpdateBookshopComponent },
  { path: 'AddBook', component: AddBookComponent },
  {path: 'Books/UpdateBook/:id', component: UpdateBookComponent },

];
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
    DeleteBookshopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
