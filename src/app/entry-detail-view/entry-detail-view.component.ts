import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-entry-detail-view',
  templateUrl: './entry-detail-view.component.html',
  styleUrls: ['./entry-detail-view.component.css']
})
export class EntryDetailViewComponent implements OnInit {

  entryID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params.get('entryID'));
        this.entryID = params.get('entryID');
      }

    )
  }

}
