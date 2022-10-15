import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import {
  BrowserAnimationsModule, NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatSidenavModule }     from '@angular/material/sidenav';
import { MatButtonModule }      from '@angular/material/button';
import { MatListModule }        from '@angular/material/list';
import { MatIconModule }        from '@angular/material/icon';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NoteBookComponent }    from './note-book/note-book.component';
import { NotesListComponent }   from './note-book/notes-list/notes-list.component';
import { NoteComponent }        from './note-book/notes-list/note/note.component';
import { NotePanelComponent }   from './note-book/note-panel/note-panel.component';
import { HeaderComponent }      from './note-book/note-panel/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NoteBookComponent,
    NotesListComponent,
    NoteComponent,
    NotePanelComponent,
    HeaderComponent,
  ],
  imports:      [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers:    [],
  bootstrap:    [AppComponent],
})
export class AppModule {}
