import { Component, Input, OnInit } from '@angular/core';
import { NoteBookService }          from '../../shared/note-book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() noteTitle: string;

  constructor(public noteBookService: NoteBookService) { }

  ngOnInit(): void {
  }

  onOpenClicked() {
    this.noteBookService.isOpened = !this.noteBookService.isOpened
  }
}
