import { EventEmitter, Injectable } from '@angular/core';
import { NoteModel }                from './note.model';

const ERROR_NOTE = {
  id:-1,
  name: 'ERROR'
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: NoteModel[] = [
    {id: 1, name: 'Shopping list', description: 'list with important stuff'},
    {
      id:          2, name: 'dadasdas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet debitis eveniet facere fuga\n' +
                   '  ratione repudiandae ullam velit voluptatum! Ab amet doloribus est id laboriosam, minima molestiae\n' +
                   '  provident unde.',
      imageURL:    'https://picsum.photos/200/300',
    },
    {id: 3, name: 'dadasdas', description: 'aasasdd', imageURL: 'https://picsum.photos/200/300'}];

  onNoteSelected = new EventEmitter<number>();

  constructor() {
  }

  getNote(id: number): NoteModel {
    let note = this.notes.find((note: NoteModel) => {
      return note.id == id;
    });

    if (note == undefined) {
      return ERROR_NOTE;
    }

    return note;
  }

  getNotes(): NoteModel[] {
    return this.notes.slice();
  }
}
