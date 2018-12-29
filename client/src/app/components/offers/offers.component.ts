import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { BookInterface } from 'src/app/models/book-interfaces';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  private books: BookInterface;
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi
    .getOffers()
    .subscribe((data:BookInterface)=>(this.books=data));
  }

}
