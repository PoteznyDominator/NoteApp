import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteBookService {
  isOpened = true;

  constructor() { }
}
