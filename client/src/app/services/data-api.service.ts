import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  books: Observable<any>;
  book: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService ) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
});
  

  getAllBooks(){
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=0`;
    return this.http.get(url_api);
  }

  getBookId(id: string){
    const url_api = `http://localhost:3000/api/books/${id}`;
    return (this.book = this.http.get(url_api));
  }

  getOffers(){
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    return (this.books = this.http.get(url_api));
  }

  saveBook(book){
    //todo: obtener token
    //todo: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?$access_token=${token}`;
    return this.http.post(url_api, book,{headers: this.headers})
    .pipe(map(data => data));
  }

  updateBook(book){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?$access_token=${token}`;
    return this.http.put(url_api, book,{headers: this.headers})
    .pipe(map(data => data));
  }

  deleteBook(idd: string){
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?$access_token=${token}`;
    return this.http.delete(url_api, {headers: this.headers})
    .pipe(map(data => data));
  }

}
