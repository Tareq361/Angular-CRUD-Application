import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../Model/BookShop";
import {Observable} from "rxjs";
import {Book} from "../../Model/Book";
import {BookService} from "../../Services/book.service";
import {BookShopService} from "../../Services/book-shop.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-bookshop',
  templateUrl: './update-bookshop.component.html',
  styleUrls: ['./update-bookshop.component.css']
})
export class UpdateBookshopComponent implements OnInit {
  id?: number;
  bookShop:BookShop=new BookShop(0,"","","",[],"","")
  booklist:Observable<Book[]>|undefined;
  submitted = false;
  updateBookShopForm: FormGroup;
  constructor(private route: ActivatedRoute,private bookservice:BookService,private bookshopservice:BookShopService, private router: Router,private fb: FormBuilder) {
    this.updateBookShopForm = this.fb.group({
      shopName:[this.bookShop.shopName,[Validators.required]],
      shopNumber: [this.bookShop.shopNumber,Validators.required],
      location: [this.bookShop.location,Validators.required],
      contactNumber: [this.bookShop.contactNumber,Validators.minLength(11)],
      email: [this.bookShop.email,Validators.required],
      booklist: [this.bookShop.booklist,Validators.required],
    });
  }

  ngOnInit(): void {
    this.booklist = this.bookservice.getBooksList();
    this.id = this.route.snapshot.params['id'];
    this.bookshopservice.getBookShop(this.id)
      .subscribe(data => {
        console.log(data)
        this.bookShop = data;
        this.updateBookShopForm.controls['shopName'].setValue(this.bookShop.shopName);
        this.updateBookShopForm.controls['shopNumber'].setValue(this.bookShop.shopNumber);
        this.updateBookShopForm.controls['location'].setValue(this.bookShop.location);
        this.updateBookShopForm.controls['contactNumber'].setValue(this.bookShop.contactNumber);
        this.updateBookShopForm.controls['email'].setValue(this.bookShop.email);
        this.updateBookShopForm.controls['booklist'].setValue(this.bookShop.booklist);
      }, error => console.log(error));
  }
  save() {
    console.log("update")
    console.log(this.updateBookShopForm.value)
    this.bookshopservice
      .updateBookShop(this.id,this.updateBookShopForm.value).subscribe(data => {
        console.log(data)

        this.gotoList();
      },
      error => console.log(error));
  }

  get title(){
    return this.updateBookShopForm.get('shopName');
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Bookshops']);
  }

}
