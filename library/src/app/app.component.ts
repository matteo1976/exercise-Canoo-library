import { Component, OnInit, Input } from '@angular/core';
import { ListBooksService } from './list-books.service';
import { FormsModule } from '@angular/forms';
import {SerchPipe} from './serch.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() period: string;
  @Input() query: string;
  book = [];

  title = 'Canoo Library';


  constructor(private allbooks: ListBooksService) {
      this.allbooks = allbooks;
  }
  ngOnInit() {
        this.allbooks.getBooks().subscribe((resp) => {
          this.book = resp.books;
      });
      this.query = '' ;
  }

}
