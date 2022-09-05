import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../Model/Book";
import {Router} from "@angular/router";
import {BookService} from "../../Services/book.service";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books: Observable<Book[]> | undefined;

  constructor(private bookService: BookService,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.books = this.bookService.getBooksList();
  }
  deleteBook(id: number) {
    var result = confirm("Want to delete?");
    if (result) {
      this.bookService.deleteBook(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
    else {
      this.reloadData();
    }

  }
}
