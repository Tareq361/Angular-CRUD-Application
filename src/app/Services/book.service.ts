import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8090/api/books';
  private authorUrl = 'http://localhost:8090/api/authors';
  constructor(private http: HttpClient) { }
  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getAllAuthor(): Observable<any> {
    return this.http.get(`${this.authorUrl}`);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  getBook(id: number | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateBoook(id: number | undefined, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
