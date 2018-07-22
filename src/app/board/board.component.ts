// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { Task } from '../domain/task';
import { FormControl } from '@angular/forms';
import { Status } from '../domain/status';
import { StatusService } from '../service/status.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  statusList: Status[] = [];
  tasksReturned: Task[] = [];
  showAddTask: boolean = false;
  draggedTask: Task;
  task: Task;

  constructor(private taskService: TaskService, statusService: StatusService) {
    statusService.generateCombo().subscribe((status => this.statusList = status));
    this.task = new Task();
    this.findAll();
  }

  ngOnInit() {}
  
  closeNewTask() {
    this.showAddTask = false;
  }

  newTaskClick() {
    this.task = new Task();
    this.showAddTask = true;
  }

  editTaskClick(task: Task) {
    this.task = Object.assign({}, task);
    this.showAddTask = true;
  }

  removeTaskClick(task: Task) {
    this.taskService.removeTask(task).subscribe(() => {
      this.findAll();
    });
  }

  findAll() {
    this.taskService.findAll().subscribe((tasks: Task[]) => {
      this.tasksReturned = tasks;
    });
  }

  saveTaskSubmit(form: FormControl) {
    if (this.task.id !== undefined) {
      this.editTask(form);
    } else {
      this.addTask(form);
    }
  }
  
  addTask = (form: FormControl) => {
    this.taskService.addTask(form.value).subscribe(() => this.successCallback(form));
  }

  editTask = (form: FormControl) => {
    this.taskService.updateTask(this.task).subscribe(() => this.successCallback(form));
  }
  
  successCallback = (form: FormControl) => {
    form.reset();
    this.closeNewTask();
    this.findAll();
  };

  dragStart(event, task: Task) {
    this.draggedTask = task;
  }

  dragEnd(event) {
    this.draggedTask = null;
  }

  drop(event, status: string) {
    if (this.draggedTask) {
      let index = this.tasksReturned.indexOf(this.draggedTask);
      
      if (index !== -1) {
        let selectedTask: Task[] = this.tasksReturned.splice(index, 1);

        if (selectedTask.length > 0) {
          selectedTask[0].status = status;
          
          this.taskService.updateTask(selectedTask[0]).subscribe((task: Task) => {
            this.tasksReturned = [...this.tasksReturned, task];
          });
        }
      }
    }
  }

}
