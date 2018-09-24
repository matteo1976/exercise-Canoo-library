import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SerchPipe } from '../serch.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() title: string;
  @Input() autor: string;
  @Input() img: string;
  @Input() pubblication: string;
  @Input() trame: string;

  constructor() { }

  ngOnInit() { }
}
