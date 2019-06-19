import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { EntryDetailViewComponent } from './entry-detail-view/entry-detail-view.component';

const routes: Routes = [
  { path: '', component: EntriesComponent },
  { path: 'entry/:entryID', component: EntryDetailViewComponent},
  { path: 'entry', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
