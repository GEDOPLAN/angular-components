import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedded-view',
  templateUrl: './embedded-view.component.html',
  styleUrls: ['./embedded-view.component.css']
})
export class EmbeddedViewComponent implements OnInit {

  news=[
    'News Nummer 1, ganz frisch rein gekomen',
    'News Nummer 2, schon ein bisschen älter'
  ]

  constructor() { }

  ngOnInit() {
  }

}
