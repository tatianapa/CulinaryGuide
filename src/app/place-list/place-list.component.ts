import { Component, OnInit, OnDestroy } from '@angular/core';
import {Place} from '../place.model';
import { TagSearchService } from '../tagSearch.service';
import {Tag} from '../tag-list/tag.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  foundPlaces: Place[] = [];

  constructor(private tagSearchService: TagSearchService) {
   }

  ngOnInit() {
    // if(typeof this.foundPlaces !== 'undefined' || this.foundPlaces.length > 0)
    //     {
    //      this.foundPlaces = [];
    //     }
    // this.foundPlaces = this.tagSearchService.getFoundPlaces();
  }
}
