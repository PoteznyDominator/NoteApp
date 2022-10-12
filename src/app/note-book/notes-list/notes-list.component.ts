import { Component, OnInit } from '@angular/core';
import { NoteModel }         from './note/note.model';

@Component({
  selector:    'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls:   ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {

  notes: NoteModel[] = [{
    id: 1, name: 'Shopping list', description: 'list with important stuff', imageURL: '',
  }, {
    id:       1, name: 'dadasdas', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet debitis eveniet facere fuga\n' +
                                                '  ratione repudiandae ullam velit voluptatum! Ab amet doloribus est id laboriosam, minima molestiae\n' +
                                                '  provident unde.',
    imageURL: 'https://picsum.photos/200/300',
  }, {
    id: 1, name: 'dadasdas', description: 'aasasdd', imageURL: 'https://picsum.photos/200/300',
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
