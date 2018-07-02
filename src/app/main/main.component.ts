import { Component, OnInit } from '@angular/core';
import {TagListComponent} from '../tag-list/tag-list.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tiles = [
    {text: '',
      cols: 1, color: 'transparent'},
    {text: 'Welcome to my Jerusalem Culinary guide - explore the best cafes and restaurants in Jerusalem',
      cols: 10,  color: 'linen'},
    {text: '',
      cols: 1,  color: 'transparent'}



  ];

  constructor() { }

  ngOnInit() {
  }

}
