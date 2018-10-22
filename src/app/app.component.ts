import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba2';

  sourceBuilderTools = [
    {name: 'Cats', type: 'Pet', id: '1'},
    {name: 'Dogs', type: 'Pet', id: '2' },
    {name: 'Lion', type: 'Wild', id: '3'},
    {name: 'Tiger', type: 'Wild', id: '4'},
  ];
  targetBuilderTools = [
    {name: 'Cats', type: 'Pet', id: '1'}
  ];

  constructor() { }

  log(e: any) {
    console.log('log:', e);
  }
}
