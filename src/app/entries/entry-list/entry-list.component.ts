import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/shared/entry.service';
import { Entry } from 'src/app/shared/entry.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  list: Entry[];
  
  constructor(private service: EntryService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.service.getEntries().subscribe(
      actions =>{this.list = actions.map(
        item =>{
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as Entry;
          }
        )
      }
    );
  }

  edit(ent: Entry){
    this.service.formData = Object.assign({}, ent);
  }

  onDelete(id: string){
    if(confirm("Delete?")){
      this.firestore.doc('entries/'+id).delete();
    }
  }


}
