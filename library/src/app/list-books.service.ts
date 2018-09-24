import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable()
export class ListBooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get('http://localhost:3000/books');
  }

  addBooks(): Observable<any> {
    return this.http.get('http://localhost:3000/books/new', { responseType: 'text' });
  }

}






