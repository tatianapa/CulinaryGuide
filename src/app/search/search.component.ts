import { Component, OnInit } from '@angular/core';
import { Tag } from '../_models/tag';
import { PlacesService } from '../_services/places.service';
import { Place } from '../_models/place';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tags: Tag[] = [];
  placesByTag: Place[] = [];
  noPlacesFound = false;

  getPlaces(id: number){
    this.noPlacesFound = false;
    this.placesService.getPlacesForTag(id).subscribe(
      places => {
        this.placesByTag = places as Place[];
        if(this.placesByTag.length === 0){
          this.noPlacesFound = true;
        }
      }
    );
  }

  constructor(private placesService: PlacesService) {
   }

  ngOnInit() {
    this.placesService.getTags().subscribe(
      tags => {this.tags = tags as Tag[];}
    );
  }



}
