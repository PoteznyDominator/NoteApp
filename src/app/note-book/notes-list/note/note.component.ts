import { Component, Input, OnInit } from '@angular/core';
import { NoteModel }                from './note.model';

@Component({
  selector:    'app-note',
  templateUrl: './note.component.html',
  styleUrls:   ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() note: NoteModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
