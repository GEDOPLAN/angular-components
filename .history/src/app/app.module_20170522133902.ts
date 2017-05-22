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


const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: InsertChildrenComponent, path: 'children' },
  { component: TemplateOutletComponent, path: 'template-outlet' },
  { component: TemplateRefComponent, path: 'template-ref' },
  { component: ViewContainerRefComponent, path: 'viewcontainer' },
  { component: EmbeddedViewComponent, path: 'embedded' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertChildrenComponent,
    TemplateOutletComponent,
    TemplateRefComponent,
    ViewContainerRefComponent,
    EmbeddedViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
