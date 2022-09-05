import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Book} from "../../Model/Book";
import {BookShopService} from "../../Services/book-shop.service";
import {BookService} from "../../Services/book.service";

@Component({
  selector: 'app-add-bookshop',
  templateUrl: './add-bookshop.component.html',
  styleUrls: ['./add-bookshop.component.css']
})
export class AddBookshopComponent implements OnInit {
  booklist:Observable<Book[]>|undefined;

  submitted = false;
  constructor(private bookservice:BookService,private bookshopservice:BookShopService, private router: Router,private fb: FormBuilder) { }
  addBookShopForm = this.fb.group({
    shopName:[null,[Validators.required]],
    shopNumber: ["",Validators.required],
    location: ["",Validators.required],
    contactNumber: ["",Validators.minLength(11)],
    email: ["",Validators.required],
    booklist: [[],Validators.required],
  });
  ngOnInit(): void {
    this.reloadData();
  }
  save() {


    this.bookshopservice
      .createBookShop(this.addBookShopForm.value).subscribe(data => {
        console.log(data)
        this.gotoList();
      },
      error => console.log(error));
  }
  get title(){
    return this.addBookShopForm.get('shopName');
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Bookshops']);
  }

  private reloadData() {
    this.booklist = this.bookservice.getBooksList();
  }
}
