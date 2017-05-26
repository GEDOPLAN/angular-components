import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { BoxWithDefaultComponent } from '../template-outlet/components/box-with-default/box-with-default.component'


@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.css']
})
export class ViewContainerRefComponent {

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  boxFactory: ComponentFactory<BoxWithDefaultComponent>

  constructor(r: ComponentFactoryResolver) {
    this.boxFactory = r.resolveComponentFactory(BoxWithDefaultComponent);
  }

  ngAfterViewInit(){
    let box1=this.content.createComponent(this.boxFactory);
    box1.instance.title="Dynamic (1)";

    let box2=this.content.createComponent(this.boxFactory);
    box2.instance.title="Dynamic (2)";
  }

}
