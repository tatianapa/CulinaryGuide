import { Component, OnInit } from '@angular/core';
import {Place} from '../place.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[];

  constructor() { }

  ngOnInit() {
  }

}
