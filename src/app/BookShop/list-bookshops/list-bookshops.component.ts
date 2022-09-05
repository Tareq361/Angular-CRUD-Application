import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BookShop} from "../../Model/BookShop";
import {BookShopService} from "../../Services/book-shop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-bookshops',
  templateUrl: './list-bookshops.component.html',
  styleUrls: ['./list-bookshops.component.css']
})
export class ListBookshopsComponent implements OnInit {
bookShops:Observable<BookShop[]>|undefined;
  constructor(private bookShopService:BookShopService,private router: Router) { }
  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.bookShops = this.bookShopService.getBookShopList();
  }
  deleteBookShop(id: number) {
    var result = confirm("Want to delete?");
    if (result) {
      this.bookShopService.deleteBookShop(id)
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
