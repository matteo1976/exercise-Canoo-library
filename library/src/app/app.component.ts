import { Component, OnInit, Input } from '@angular/core';
import { ListBooksService } from './list-books.service';
import { FormsModule } from '@angular/forms';
import { SerchPipe } from './serch.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() period: string;
  @Input() query: string;

  title = 'Canoo Library';
  book = [];
  msgnewBook = '';

  constructor(private allbooks: ListBooksService) {
    this.allbooks = allbooks;
  }
  ngOnInit() {
    this.allbooks.getBooks().subscribe((resp) => {
      this.book = resp.books;
    });
    this.query = '';
  }
  addNewBook() {
    this.allbooks.addBooks().subscribe((resp) => {
      alert('TODO:create here form for insert a new book');
      // TODO: control response from REST API ( back-end)
      // this is response from API but i don't develop
      this.msgnewBook = resp;

    });
  }
}

