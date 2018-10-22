import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {FormsModule} from '@angular/forms';
import {BuilderComponent} from './builder/builder.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    NgxDnDModule,
    FormsModule,
    EditorModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
