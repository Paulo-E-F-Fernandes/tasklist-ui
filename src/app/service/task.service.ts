// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Application
import { Task } from '../domain/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskUrl: string = 'http://localhost:8080/task';

  constructor(private http: HttpClient) { }

  addTask(task: Task) {
    return this.http.post(this.taskUrl, task);
  }

  findAll() {
    return this.http.get<Task[]>(this.taskUrl);
  }

  updateTask(task: Task) {
    return this.http.put(this.taskUrl, task);
  }

  removeTask(task: Task) {
    return this.http.delete(`${this.taskUrl}/${task.id}`);
  }

}
