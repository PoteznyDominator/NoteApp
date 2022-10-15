import { Component, OnInit } from '@angular/core';
import { NotesService }      from '../../shared/notes.service';
import { NoteModel }         from '../../shared/note.model';

@Component({
  selector: 'app-note-panel',
  templateUrl: './note-panel.component.html',
  styleUrls: ['./note-panel.component.css']
})
export class NotePanelComponent implements OnInit {
  note: NoteModel = {id: 0, name: ''};
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.onNoteSelected.subscribe((id: number) => {
      this.note = this.notesService.getNote(id);
    });
  }
}
