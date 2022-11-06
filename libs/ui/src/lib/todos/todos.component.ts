import {Component, Input} from '@angular/core';
import {Todo} from "@ryan-workspace/data";

@Component({
  selector: 'ryan-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent  {
  @Input() todos: Todo[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
