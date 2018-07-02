
import { Component, OnInit } from '@angular/core';
import { Tag } from './tag.model';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  tagList: Tag[] =
  [
    new Tag('Kosher', '#b6ff0a'),
    new Tag('Italian', '#ff0ab6'),
    new Tag('Luxury', '#ff2f0a'),
    new Tag('Family', '#0aff9d'),
    new Tag('Cofee Break', '#cc9b28')
  ];

  constructor() { }

  ngOnInit() {
  }

}
