import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-entries-box',
  templateUrl: './entries-box.component.html',
  styleUrls: ['./entries-box.component.css']
})
export class EntriesBoxComponent implements OnInit {

  @Input()
  elements: { text: string, title: string };

  @ContentChild(TemplateRef)
  userTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
