import { Component, OnInit } from '@angular/core';
import { NoteModel }         from '../../shared/note.model';
import { NotesService }      from '../../shared/notes.service';

@Component({
  selector:    'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls:   ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {

  notes: NoteModel[];

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  onNoteSelected(id: number) {
    this.notesService.onNoteSelected.emit(id);
  }
}
