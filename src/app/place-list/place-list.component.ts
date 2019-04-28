import { Component, OnInit, OnDestroy } from '@angular/core';
import {Place} from '../_models/place';
import { PlacesService } from '../_services/places.service';
import {Tag} from '../_models/tag';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  foundPlaces: Place[] = [];

  constructor(private placesService: PlacesService) {
   }

  ngOnInit() {
    this.placesService.getPlaces().subscribe(
      places => {this.foundPlaces = places as Place[];}
    );
    // if(typeof this.foundPlaces !== 'undefined' || this.foundPlaces.length > 0)
    //     {
    //      this.foundPlaces = [];
    //     }
    // this.foundPlaces = this.tagSearchService.getFoundPlaces();
  }
}
