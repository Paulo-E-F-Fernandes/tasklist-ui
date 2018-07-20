// Angular
import { Pipe, PipeTransform } from '@angular/core';

// Application
import { Task } from '../domain/task';

@Pipe({
  name: 'task'
})
export class TaskPipe implements PipeTransform {

  transform(tasks: Task[], status: string): Task[] {
    return tasks.filter(task => task.status === status);
  }

}
