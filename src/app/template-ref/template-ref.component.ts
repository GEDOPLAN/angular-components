import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {

  elements: { text: string, title: string }[] = [
    { text: 'News from the Blog', title: 'News 1' },
    { text: 'All Fine, title', title: 'News 2' },
    { text: 'Hello World', title: 'Important News' }
  ]

  constructor() { }

  ngOnInit() {
  }

  alert(entry: any) {
    alert(entry.text);
  }

}
