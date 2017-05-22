import { Component, OnInit, TemplateRef, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-box-with-default',
  templateUrl: './box-with-default.component.html',
  styleUrls: ['./box-with-default.component.css']
})
export class BoxWithDefaultComponent implements OnInit {

  @Input()
  title: string;

  @ContentChild(TemplateRef)
  footerTemplate: TemplateRef<any>;


  constructor() { }

  ngOnInit() {
  }

}
