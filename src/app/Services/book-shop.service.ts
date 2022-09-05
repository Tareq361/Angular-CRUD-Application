import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookShopService {
  private baseUrl = 'http://localhost:8090/api/bookshops';

  constructor(private http: HttpClient) { }
  getBookShopList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteBookShop(id: number|undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  createBookShop(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  getBookShop(id: number | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateBookShop(id: number | undefined, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}

