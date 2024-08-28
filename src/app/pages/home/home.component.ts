import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allTasks: task[] = [];
  tasksUtils: task[] = [];
  tasksUtilsDone: task[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.task();
  }

  task(){
    const storedTasks = this.localStorageService.getItem("task");
    this.allTasks = storedTasks ? storedTasks : [];
    if(this.allTasks  != null){
      this.tasksUtils = this.allTasks.filter((resultado) => resultado.activo === true);
      this.tasksUtilsDone = this.allTasks .filter((resultado) => resultado.activo === false)
    }

    console.log(this.allTasks)
  }

  onTaskTextChange(taskText: task){
    this.allTasks.push(taskText);
    this.localStorageService.setItem('task', this.allTasks);
    this.task();
  }

  onTaskCompletedChange(taskCompleted: string){
    this.allTasks = this.allTasks.map((resultado)=>{
      if(resultado.text === taskCompleted){
        resultado.activo = false
      }
      return resultado;
    })
    // this.allTasks[taskCompleted].activo = false;
    this.localStorageService.setItem('task', this.allTasks);
    this.task();
  }

  onTaskDeleteChange(taskCompleted: number){
    this.allTasks.splice(taskCompleted,1)[0];
    this.task();
  }
}
