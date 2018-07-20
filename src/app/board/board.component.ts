// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { Task } from '../domain/task';
import { FormControl } from '@angular/forms';
import { Status } from '../domain/status';
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

  constructor(private taskService: TaskService) {
    this.statusList.push({value: 'backlog', label: 'Backlog'});
    this.statusList.push({value: 'progress', label: 'In Progress'});
    this.statusList.push({value: 'testing', label: 'Testing'});
    this.statusList.push({value: 'done', label: 'Done'});

    this.findAll();
  }

  ngOnInit() {}

  newTask() {
    this.showAddTask = true;
  }

  closeNewTask() {
    this.showAddTask = false;
  }

  addTask(form: FormControl) {
    this.taskService.addTask(form.value).subscribe(() => {
      form.reset();
      this.closeNewTask();
      this.findAll();
    });
  }

  findAll() {
    this.taskService.findAll().subscribe((tasks: Task[]) => {
      this.tasksReturned = tasks;
    });
  }

  removeTask(task: Task) {
    console.log(`task - ${task.id}`);
    this.taskService.removeTask(task).subscribe(() => {
      this.findAll();
    });
  }

}
