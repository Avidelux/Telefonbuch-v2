import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entries/entry/entry.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';
import { EntryService } from './shared/entry.service';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
