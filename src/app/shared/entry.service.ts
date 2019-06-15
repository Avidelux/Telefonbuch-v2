import { Injectable } from '@angular/core';
import { Entry } from './entry.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  formData: Entry;

  constructor(private firestore: AngularFirestore) { }

  getEntries(){
    return this.firestore.collection('entries').snapshotChanges();
  }




}
