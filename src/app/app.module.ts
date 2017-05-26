import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InsertChildrenComponent } from './insert-children/insert-children.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { EmbeddedViewComponent } from './embedded-view/embedded-view.component';
import { BoxComponent } from './insert-children/components/box/box.component';
import { BoxHeaderDirective } from './insert-children/components/box-header.directive';
import { BoxWithDefaultComponent } from './template-outlet/components/box-with-default/box-with-default.component';
import { EntriesBoxComponent } from './template-ref/components/entries-box/entries-box.component';
import { NewsRepeatDirective } from './embedded-view/components/news-repeat.directive';


const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: InsertChildrenComponent, path: 'children' },
  { component: TemplateOutletComponent, path: 'template-outlet' },
  { component: TemplateRefComponent, path: 'template-ref' },
  { component: ViewContainerRefComponent, path: 'viewcontainer' },
  { component: EmbeddedViewComponent, path: 'embedded' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertChildrenComponent,
    TemplateOutletComponent,
    TemplateRefComponent,
    ViewContainerRefComponent,
    EmbeddedViewComponent,
    BoxComponent,
    BoxHeaderDirective,
    BoxWithDefaultComponent,
    EntriesBoxComponent,
    NewsRepeatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [BoxWithDefaultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
