import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule }     from '@angular/material/sidenav';
import { MatButtonModule }      from '@angular/material/button';
import { MatListModule }        from '@angular/material/list';
import { MatIconModule }        from '@angular/material/icon';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NoteBookComponent } from './note-book/note-book.component';
import { NotesListComponent } from './note-book/notes-list/notes-list.component';
import { NoteComponent } from './note-book/notes-list/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NoteBookComponent,
    NotesListComponent,
    NoteComponent,
  ],
  imports:      [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers:    [],
  bootstrap:    [AppComponent],
})
export class AppModule {}
