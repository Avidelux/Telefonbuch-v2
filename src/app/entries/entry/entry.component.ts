import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/shared/entry.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private service: EntryService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form ?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      surname: '',
      number: '',
      mail: '',
    }
  }

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null){
      this.firestore.collection('entries').add(data);
    }else{
      this.firestore.doc('entries/'+form.value.id).update(data);
    }
    this.resetForm(form);
  }



}
