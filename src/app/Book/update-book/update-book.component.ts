import { Component, OnInit } from '@angular/core';
import {Book} from "../../Model/Book";
import {Observable} from "rxjs";
import {Author} from "../../Model/Author";
import {BookService} from "../../Services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
 id?: number;
  book: Book = new Book(0,"",0,"",[],"","");
  authors: Observable<Author[]> | undefined;
  // auth: Author=new Author(0,"","");
  submitted = false;

  constructor(private bookService: BookService,
              private router: Router,private fb: FormBuilder,private route: ActivatedRoute) { }
  updateBookForm = this.fb.group({
    title:[this.book.title,[Validators.required]],
    price: [this.book.price,Validators.required],
    yearOfPublish: [this.book.yearOfPublish,Validators.required],
    authors: [this.book.authors,Validators.required],
    genre: [this.book.genre,Validators.minLength(5)],
    publisher: [this.book.publisher,],
  });
  ngOnInit(): void {
    this.authors = this.bookService.getAllAuthor();


    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
        this.updateBookForm.controls['title'].setValue(this.book.title);
        this.updateBookForm.controls['price'].setValue(this.book.price);
        this.updateBookForm.controls['yearOfPublish'].setValue(this.book.yearOfPublish);
        this.updateBookForm.controls['genre'].setValue(this.book.genre);
        this.updateBookForm.controls['authors'].setValue(this.book.authors);
        this.updateBookForm.controls['publisher'].setValue(this.book.publisher);
      }, error => console.log(error));

  }

  save() {
console.log("update")
 console.log(this.updateBookForm.value)
    this.bookService
      .updateBoook(this.id,this.updateBookForm.value).subscribe(data => {
        console.log(data)
        this.book = new Book(0,"",0,"",[],"","");
        this.gotoList();
      },
      error => console.log(error));
  }
  get title(){
    return this.updateBookForm.get('title');
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Books']);
  }


}
