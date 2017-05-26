import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNewsRepeat]'
})
export class NewsRepeatDirective {

 constructor(private tmp: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input('appNewsRepeat')
  news: string[];

  ngOnInit() {
    this.news.forEach(text => {
      let title = text.substr(0, 20) + '...'
      let dynamicView = this.view.createEmbeddedView(this.tmp, {
        params: {
          title,
          text
        }
      });

    })
  }


}
