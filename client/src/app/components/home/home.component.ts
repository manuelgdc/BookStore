import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService ) { }

  ngOnInit() {
    this.getListBook();
  }

  getListBook(){
    this.dataApi.getAllBooks()
    .subscribe(books => console.log(books));
  }

  

}
