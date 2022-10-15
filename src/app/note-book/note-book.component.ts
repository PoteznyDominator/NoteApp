import { Component, OnInit } from '@angular/core';
import { NoteBookService }                 from './shared/note-book.service';

@Component({
  selector:    'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls:   ['./note-book.component.css'],
})
export class NoteBookComponent implements OnInit {

  constructor(public noteBookService: NoteBookService) {
  }

  ngOnInit(): void {
  }

}
