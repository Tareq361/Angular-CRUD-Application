import { Component, OnInit } from '@angular/core';
import {Book} from "../../Model/Book";
import {BookService} from "../../Services/book.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Author} from "../../Model/Author";
import {Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = new Book(0,"",0,"",[],"","");
  authors: Observable<Author[]> | undefined;
  auth: Author=new Author(0,"","");
  submitted = false;

  constructor(private bookService: BookService,
              private router: Router,private fb: FormBuilder) { }
  addBookForm = this.fb.group({
    title:[null,[Validators.required]],
    price: [0,Validators.required],
    yearOfPublish: ["",Validators.required],
    authors: [[],Validators.required],
    genre: ["",Validators.minLength(5)],
    publisher: ["",],
  });
  ngOnInit(): void {
    this.reloadData();

  }

  save() {

    console.log(this.book.authors);
    this.bookService
      .createBook(this.addBookForm.value).subscribe(data => {
        console.log(data)
        this.book = new Book(0,"",0,"",[],"","");
        this.gotoList();
      },
      error => console.log(error));
  }
  get title(){
    return this.addBookForm.get('title');
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Books']);
  }

  private reloadData() {
    this.authors = this.bookService.getAllAuthor();
  }
}
