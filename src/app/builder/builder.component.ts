import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuilderComponent implements OnInit {

  sourceBuilderTools = [
    { name: 'Section', fielgroup: [] as any[], inputType: 'section', icon: 'far fa-square', class: 'wide', type: 'section'},
    { name: 'Fila', fielgroup: [] as any[], icon: 'far fa-square', class: 'row', type: 'fila'},
    { name: 'Password', inputType: 'password', icon: 'fas fa-language', class: 'half',  type: 'input'},
    { name: 'Text', inputType: 'text', icon: 'fas fa-language', class: 'half', type: 'input' },
    { name: 'Number', inputType: 'number', icon: 'fas fa-hashtag', class: 'half', type: 'input' },
    { name: 'Email', inputType: 'email', icon: 'fas fa-hashtag', class: 'half', type: 'input' },
    { name: 'Boton', inputType: 'button', icon: 'fas fa-hashtag', class: 'half btn btn-primary', type: 'button', nameOut: 'Aceptar' },
    { name: 'Select', inputType: 'select', icon: 'fas fa-hashtag', class: 'half', type: 'select' },
    { name: 'Text Area', inputType: 'textarea', icon: 'fas fa-hashtag', class: 'half', type: 'textArea', row: '5'},
    { name: 'CheckBoxk', inputType: 'checkbox', icon: 'fas fa-hashtag', class: 'half', type: 'check', nameOut: 'Activo'},
    { name: 'RadioButton', inputType: 'radio', icon: 'fas fa-hashtag', class: 'half', type: 'radio', nameOut: 'Option 2'},
    { name: 'Select Multiple', inputType: 'multiple', icon: 'fas fa-hashtag', class: 'half', type: 'select', multiple: 'multiple'},
    { name: 'File', inputType: 'file', icon: 'fas fa-hashtag', class: 'half', type: 'file'},
    { name: 'Imagen', icon: 'fas fa-hashtag', class: 'half img-thumbnail', type: 'img',
      src: 'https://www.w3schools.com/bootstrap4/cinqueterre.jpg', alt: 'img', width: '304', height: '236'},
    { name: 'Table', icon: 'fas fa-hashtag', class: 'wide table', type: 'table'},
    { name: 'Editor', icon: 'fas fa-hashtag', class: 'wide', type: 'tiny'},
    { name: 'Titulo', icon: 'fas fa-hashtag', class: 'half', type: 'titulo'}
  ];
  targetBuilderTools: any[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  droppableItemClass = (item: any) => `${item.class} ${item.inputType} ${item.type} ${item.nameOut} ${item.row} ${item.multiple} ${item.width} ${item.height} ${item.alt} ${item.src} ${item.id} ${item.label}`;
  droppableItemClassSource = (item: any) => `${item.name} ${item.icon}`;

  builderDrag(e: any) {
    const item = e.value;
    switch (item.type)  {
      case 'table' :
        console.log('soy table');
        item.id = 'table-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'number' :
        item.data = item.inputType === 'number' ? (Math.random() * 100) | 0 : Math.random().toString(36).substring(20);
        item.id = 'number-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'button' :
        console.log('soy button');
        item.id = 'button-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'select' :
        console.log('soy select');
        item.id = 'select-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'check' :
        console.log('soy check');
        item.id = 'check-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'radio' :
        console.log('soy radio');
        item.id = 'radio-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'img' :
        console.log('soy img');
        item.id = 'img-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'file' :
        console.log('soy file');
        item.id = 'file-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'input' :
        console.log('soy input');
        item.label = 'hola papus';
        item.id = 'input-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'textArea' :
        console.log('soy textArea');
        item.id = 'textArea-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
      case 'titulo' :
        console.log('soy titulo');
        item.nameOut = 'Hola papus';
        // item.id = 'textArea-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        break;
    }
    // debugger;
  }

  log(e: any) {
    // console.log('este es type => ' + e.type, e);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }

}
