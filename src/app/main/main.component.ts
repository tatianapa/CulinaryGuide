import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tiles = [
    {text: '', cols: 1, color: 'transparent'},
    {text: 'One', cols: 10,  color: 'lightblue'},
    {text: '', cols: 1,  color: 'transparent'}



  ];

  constructor() { }

  ngOnInit() {
  }

}
