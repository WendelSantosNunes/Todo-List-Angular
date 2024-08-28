import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() taskTextChange = new EventEmitter<task>()
  taskText: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  newTask(){
    this.taskTextChange.emit({text: this.taskText, activo: true});
  }
}
