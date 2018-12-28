import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BookInterface} from '../../models/book-interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private books: BookInterface;

  constructor(private dataApi: DataApiService ) { }

  ngOnInit() {
    this.getListBook();
  }

  getListBook(){
    this.dataApi.getAllBooks()
    .subscribe((books: BookInterface) => (this.books = books));
  }

  

}
