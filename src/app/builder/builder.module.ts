import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule } from '@angular/forms';

import { BuilderComponent } from './builder.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgxDnDModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    BuilderComponent,
    NgbModal
  ],
  exports: [
    BuilderComponent,
  ]
})
export class BuilderModule {
}
