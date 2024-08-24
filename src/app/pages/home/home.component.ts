import { Component, OnInit } from '@angular/core';
import { tasks } from 'src/app/core/utils/tasks';
import { task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasksUtils: task[] = tasks.filter((resultado) => resultado.activo === true);
  tasksUtilsDone: task[] = tasks.filter((resultado) => resultado.activo === false);
  task!: task;

  constructor() { }

  ngOnInit(): void {
  }

  onTaskTextChange(taskText: task){
    this.tasksUtils.push(taskText);
  }
}
